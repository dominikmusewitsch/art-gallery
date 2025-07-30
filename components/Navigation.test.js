// Importiere render() und screen von React Testing Library
import { render, screen } from "@testing-library/react";

// Importiere die zu testende Komponente
import Navigation from "./Navigation";

// Importiere Erweiterungen für Jest, um Dinge wie "toBeInTheDocument()" nutzen zu können
import "@testing-library/jest-dom";

// Importiere useRouter direkt, damit wir es mocken können
import { useRouter } from "next/router";

// ✅ MOCK für useRouter aus Next.js
// Wir sagen Jest: Wenn irgendwo useRouter verwendet wird, liefere unsere eigene Version zurück
jest.mock("next/router", () => ({
  useRouter: jest.fn(), // Wir ersetzen useRouter durch eine Jest-Mock-Funktion
}));

// 👇 Beginn der Testsuite für die Navigation-Komponente
describe("Navigation component", () => {
  // beforeEach() läuft vor jedem einzelnen Test
  beforeEach(() => {
    // Wir legen fest: Wenn useRouter() aufgerufen wird, dann soll es ein Objekt mit pathname "/" zurückgeben
    useRouter.mockReturnValue({ pathname: "/" });
  });

  // 🧪 Test 1: Sind alle drei Links sichtbar?
  it("renders all navigation links", () => {
    render(<Navigation />); // Komponente rendern

    // Prüfen, ob die drei Linktexte im DOM sichtbar sind
    expect(screen.getByRole("link", { name: "Spotlight" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Gallery" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Favorites" })).toBeInTheDocument();
  });

  // 🧪 Test 2: Haben die Links die richtigen Zieladressen (href)?
  it("has correct hrefs for all links", () => {
    render(<Navigation />); // Komponente rendern

    // Überprüfe, ob der Linktext "Spotlight" den richtigen href enthält
    expect(screen.getByRole("link", { name: "Spotlight" })).toHaveAttribute("href", "/");

    // Gleiches für die anderen beiden Navigationspunkte
    expect(screen.getByRole("link", { name: "Gallery" })).toHaveAttribute("href", "/gallery");
    expect(screen.getByRole("link", { name: "Favorites" })).toHaveAttribute("href", "/favorites");
  });
});
