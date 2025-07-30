import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "./ArtPiecePreview";
import "@testing-library/jest-dom";

// ✅ Mock für use-local-storage-state (z. B. in FavoriteButton verwendet)
jest.mock("use-local-storage-state", () => () => [[], jest.fn()]);

// ✅ Mock für next/image – korrekt mit displayName und alt-Prop
jest.mock("next/image", () => {
  const MockImage = function MockImage(props) {
    return <img {...props} alt={props.alt || "mocked image"} />;
  };
  return MockImage;
});

// ✅ Mock für FavoriteButton – vermeidet Abhängigkeiten
jest.mock("./FavoriteButton", () => {
  const MockFavoriteButton = function MockFavoriteButton() {
    return <div data-testid="favorite-button" />;
  };
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
