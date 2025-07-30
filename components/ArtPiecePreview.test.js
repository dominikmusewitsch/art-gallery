import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "./ArtPiecePreview";
import "@testing-library/jest-dom";

// ⛔️ verhindert Fehler durch use-local-storage-state im FavoriteButton
jest.mock("use-local-storage-state", () => () => [[], jest.fn()]);

// ⛔️ verhindert Probleme durch <Image> von Next.js
jest.mock("next/image", () => (props) => {
  // props.src ist der Bildpfad
  return <img {...props} alt={props.alt || "mocked image"} />;
});

// ⛔️ optional: vermeidet Fehler, falls FavoriteButton weitere Abhängigkeiten hat
jest.mock("./FavoriteButton", () => () => (
  <div data-testid="favorite-button" />
));

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
