import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";
import useSWR from "swr";

// ArtPiecePreview wird gemockt, um die Testumgebung einfach zu halten
jest.mock("./ArtPiecePreview", () => {
  const Mock = ({ artPiece }) => (
    <div data-testid="art-piece-preview">{artPiece.name}</div>
  );
  Mock.displayName = "MockArtPiecePreview";
  return Mock;
});

// useSWR wird gemockt, um keine echten Netzwerk-Anfragen zu machen
jest.mock("swr");

describe("Spotlight", () => {
  test("renders loading message if data is still loading", () => {
    useSWR.mockReturnValue({
      data: undefined,
      error: undefined,
      isLoading: true,
    });

    render(<Spotlight />);
    const loadingMessage = screen.getByText(/lade/i);
    expect(loadingMessage).toBeInTheDocument();
  });

  test("renders error message if loading fails", () => {
    useSWR.mockReturnValue({
      data: undefined,
      error: true,
      isLoading: false,
    });

    render(<Spotlight />);
    const errorMessage = screen.getByText(/fehler beim laden/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("renders a random art piece using ArtPiecePreview", () => {
    // Wir setzen eine vordefinierte Antwort
    const mockArtPieces = [
      { name: "Kunstwerk A", slug: "a" },
      { name: "Kunstwerk B", slug: "b" },
      { name: "Kunstwerk C", slug: "c" },
    ];

    // Wir kontrollieren den Zufallswert, damit das Ergebnis vorhersagbar ist
    jest.spyOn(Math, "random").mockReturnValue(0.7); // → Index 2 (C)

    useSWR.mockReturnValue({
      data: mockArtPieces,
      error: undefined,
      isLoading: false,
    });

    render(<Spotlight />);
    const preview = screen.getByTestId("art-piece-preview");
    expect(preview).toHaveTextContent("Kunstwerk C");

    // Mock zurücksetzen, um andere Tests nicht zu beeinflussen
    Math.random.mockRestore();
  });
});
