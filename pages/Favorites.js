import useSWR from "swr";
import ArtList from "@/components/ArtList";
import useLocalStorage from "use-local-storage-state";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Favorites() {
  const {
    data: data,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  const [favorites, setFavorites] = useLocalStorage("favorites", {
    defaultValue: [],
  });

  if (error) return <p>Fehler beim Laden der Daten.</p>;
  if (isLoading) return <p>Lade...</p>;

  const favoriteArtPieces = data.filter((artPiece) =>
    favorites.includes(artPiece.slug)
  );

if (favoriteArtPieces.lenght === 0)return <p>Nutze das Herz um deine Liste zu füllen</p>

  console.log(favoriteArtPieces);
  return (
    <>
      <ArtList artPieces={favoriteArtPieces}></ArtList>
    </>
  );
}
