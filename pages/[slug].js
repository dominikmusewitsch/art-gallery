import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";

export default function Detail() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (isLoading) return <p>Lade...</p>;
  if (error) return <p>Fehler!</p>;

  const artPiece = data.find((piece) => piece.slug === slug);

  console.log(artPiece);

  return (
    <>
      <Link href="/Gallery">back</Link>
      <Image
        src={artPiece.imageSource}
        width={400}
        height={400}
        alt={artPiece.name}
      />
      <h2>{artPiece.artist}</h2>
      <p>{artPiece.name}</p>
      <p>{artPiece.year}</p>
      <p>{artPiece.genre}</p>
    </>
  );
}
