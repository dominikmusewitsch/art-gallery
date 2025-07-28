import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

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
  return (
    <Link href={randomArt.slug}>
      <Image
        src={randomArt.imageSource}
        width={400}
        height={400}
        alt={randomArt.name}
      />
      <p>{randomArt.artist}</p>
    </Link>
  );
}
