import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "./ArtPiecePreview";
import "@testing-library/jest-dom";
import Image from "next/image";

// ⛔️ verhindert Fehler durch use-local-storage-state im FavoriteButton
jest.mock("use-local-storage-state", () => () => [[], jest.fn()]);

// ⛔️ verhindert Probleme durch <Image> von Next.js
jest.mock("next/image", () => {
  const MockImage = (props) => {
    return (
      <Image
        {...props}
        src={props.src || "/mock.jpg"}
        alt={props.alt || "mocked image"}
      />
    );
  };
  MockImage.displayName = "MockNextImage";
  return MockImage;
});

// ⛔️ optional: vermeidet Fehler, falls FavoriteButton weitere Abhängigkeiten hat
jest.mock("./FavoriteButton", () => {
  const MockFavoriteButton = () => <div data-testid="favorite-button" />;
  MockFavoriteButton.displayName = "MockFavoriteButton";
  return MockFavoriteButton;
});

describe("ArtPiecePreview", () => {
  const dummyArtPiece = {
    name: "The Scream",
    artist: "Edvard Munch",
    slug: "the-scream",
    imageSource: "/the-scream.jpg",
    colors: ["#ff0000", "#00ff00"],
  };

  it("renders the art piece name and artist", () => {
    render(<ArtPiecePreview artPiece={dummyArtPiece} />);

    expect(screen.getByText("The Scream")).toBeInTheDocument();
    expect(screen.getByText("by Edvard Munch")).toBeInTheDocument();
  });

  it("renders the image with correct alt text", () => {
    render(<ArtPiecePreview artPiece={dummyArtPiece} />);

    const image = screen.getByAltText("The Scream");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/the-scream.jpg");
  });

  it("renders the FavoriteButton", () => {
    render(<ArtPiecePreview artPiece={dummyArtPiece} />);
    expect(screen.getByTestId("favorite-button")).toBeInTheDocument();
  });
});
