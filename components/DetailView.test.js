import { render, screen } from "@testing-library/react";
import DetailView from "./DetailView";
import "@testing-library/jest-dom";

jest.mock("next/image", () => (props) => {
  return <img {...props} />;
});

jest.mock("use-local-storage-state", () => () => [[], jest.fn()]);

describe("DetailView component", () => {
  const mockArtPiece = {
    slug: "sunrise",
    name: "Sunrise",
    artist: "Monet",
    year: "1872",
    genre: "Impressionism",
    imageSource: "/sunrise.jpg",
    colors: ["#fff", "#000"],
  };

  it("displays all art piece details", () => {
    render(<DetailView artPiece={mockArtPiece} />);

    // Künstler
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Monet"
    );

    // Name des Kunstwerks
    expect(screen.getByText(/»\s*Sunrise\s*«/)).toBeInTheDocument();

    // Jahr
    expect(screen.getByText(/Year: 1872/)).toBeInTheDocument();

    // Genre
    expect(screen.getByText(/Genre: Impressionism/)).toBeInTheDocument();
  });

  it("displays the image with correct alt text", () => {
    render(<DetailView artPiece={mockArtPiece} />);
    expect(screen.getByRole("img")).toHaveAttribute("alt", "Sunrise");
    expect(screen.getByRole("img")).toHaveAttribute("src", "/sunrise.jpg");
  });

  it("shows comment section header", () => {
    render(<DetailView artPiece={mockArtPiece} />);
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "Comments"
    );
  });
});
