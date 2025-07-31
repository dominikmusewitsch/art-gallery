// import useSWR from "swr";
import ArtList from "@/components/ArtList";
import useLocalStorage from "use-local-storage-state";
import styled from "styled-components";

// const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Favorites({ data }) {
  // const {
  //   data: data,
  //   error,
  //   isLoading,
  // } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  const [favorites, setFavorites] = useLocalStorage("favorites", {
    defaultValue: [],
  });

  // if (error) return <p>Fehler beim Laden der Daten.</p>;
  // if (isLoading) return <p>Lade...</p>;

  const favoriteArtPieces = data.filter((artPiece) =>
    favorites.includes(artPiece.slug)
  );

  if (favoriteArtPieces.length === 0)
    return (
      <>
        <EmptyList>
          No favorites selected yet.
          <br />
          Use your ❤️ to fill the list
        </EmptyList>
      </>
    );

  console.log(favoriteArtPieces);
  return (
    <>
      <ArtList data={favoriteArtPieces}></ArtList>
    </>
  );
}
const EmptyList = styled.p`
  text-align: center;
  color: #444;
`;
