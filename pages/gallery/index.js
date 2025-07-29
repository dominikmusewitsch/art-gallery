import ArtList from "@/components/ArtList";
import useSWR from "swr";

export default function Gallery() {
  const {
    data: data,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art");

  if (error) return <p>Fehler beim Laden der Daten.</p>;
  if (isLoading) return <p>Lade...</p>;
  return (
    <>
      <h1>Art Gallery</h1>
      <ArtList artPieces={data} />
    </>
  );
}
