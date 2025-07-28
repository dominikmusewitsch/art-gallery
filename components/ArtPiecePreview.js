import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function ArtPiecePreview({ artPiece }) {
  return (
    <article key={artPiece.name}>
      <FavoriteButton />
      <Link href={artPiece.slug}>
        <Image
          src={artPiece.imageSource}
          width={300}
          height={300}
          alt={artPiece.name}
        />
        <h2>{artPiece.name}</h2>
        <p>{artPiece.artist}</p>
      </Link>
    </article>
  );
}
