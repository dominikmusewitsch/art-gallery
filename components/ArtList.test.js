// Stelle sicher, dass der Mock VOR dem Import der Komponente erfolgt
jest.mock("use-local-storage-state");

import { render, screen } from "@testing-library/react";
import ArtList from "./ArtList";
import "@testing-library/jest-dom";

const dummyArtPieces = [
  {
    name: "Starry Night",
    artist: "Vincent van Gogh",
    slug: "starry-night",
    imageSource: "/starry-night.jpg",
    colors: ["#000000"],
  },
  {
    name: "Mona Lisa",
    artist: "Leonardo da Vinci",
    slug: "mona-lisa",
    imageSource: "/mona-lisa.jpg",
    colors: ["#111111"],
  },
];

describe("ArtList", () => {
  it("renders a list of art pieces", () => {
    render(<ArtList artPieces={dummyArtPieces} />);
    expect(screen.getByText("Starry Night")).toBeInTheDocument();
    expect(screen.getByText("Mona Lisa")).toBeInTheDocument();
  });
});
