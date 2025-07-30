import React from "react";
import { render, screen } from "@testing-library/react";
import useSWR from "swr";
import Image from "next/image";

// Mock von ArtPiecePreview mit data-testid
jest.mock("./ArtPiecePreview", () => {
  return function MockArtPiecePreview({ artPiece }) {
    return <div data-testid="art-piece-preview">{artPiece.name}</div>;
  };
});

// Mock von next/image
jest.mock("next/image", () => {
  return function MockImage(props) {
    return <Image {...props} alt={props.alt || "mocked image"} />;
  };
});

// Mock von useSWR
jest.mock("swr");

const mockArtPieces = [
  { name: "Kunstwerk A", slug: "a", imageSource: "/kunstwerk-a.jpg" },
  { name: "Kunstwerk B", slug: "b", imageSource: "/kunstwerk-b.jpg" },
  { name: "Kunstwerk C", slug: "c", imageSource: "/kunstwerk-c.jpg" },
];

// WICHTIG: Spotlight erst nach Mocks importieren!
import Spotlight from "./Spotlight";

describe("Spotlight", () => {
  test("renders loading message if data is still loading", () => {
    useSWR.mockReturnValue({
      data: undefined,
      error: undefined,
      isLoading: true,
    });

    render(<Spotlight />);
    expect(screen.getByText(/lade/i)).toBeInTheDocument();
  });

  test("renders error message if loading fails", () => {
    useSWR.mockReturnValue({
      data: undefined,
      error: true,
      isLoading: false,
    });

    render(<Spotlight />);
    expect(screen.getByText(/fehler beim laden/i)).toBeInTheDocument();
  });
});
