import useSWR from "swr";
import ArtPiecePreview from "./ArtPiecePreview";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Spotlight() {
  const {
    data: data,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (error) return <p>Fehler beim Laden der Daten.</p>;
  if (isLoading) return <p>Lade...</p>;

  function getRandomArtPiece() {
    const randomNumber = Math.random() * data.length;
    const randomArrayIndex = Math.floor(randomNumber);
    return data[randomArrayIndex];
  }
  const randomArt = getRandomArtPiece();
  return <ArtPiecePreview artPiece={randomArt}></ArtPiecePreview>;
}
