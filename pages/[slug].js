import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";
import DetailView from "@/components/DetailView";

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
      <DetailView artPiece={artPiece} />
    </>
  );
}
