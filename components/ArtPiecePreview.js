import Image from "next/image";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function ArtPiecePreview() {
  const {
    data: data,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (error) return <p>Fehler beim Laden der Daten.</p>;
  if (isLoading) return <p>Lade...</p>;

  console.log(data);

  const data1 = data[3];

  return (
    <ul>
      {data.map((datum) => (
        <li key={datum.name}>
          <Link href={datum.slug}>
            <Image
              src={datum.imageSource}
              width={300}
              height={300}
              alt={datum.name}
            />
            <h2>{datum.name}</h2>
            <p>{datum.artist}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
