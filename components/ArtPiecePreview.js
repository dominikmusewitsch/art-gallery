import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function ArtPiecePreview({ artPiece }) {
  return (
    <article key={artPiece.name}>
      <div style={{ position: "relative", width: "300px", height: "400px" }}>
        <FavoriteButton slug={artPiece.slug} />
        <Link href={`/gallery/${artPiece.slug}`}>
          <Image
            src={artPiece.imageSource}
            width={300}
            height={400}
            alt={artPiece.name}
          />
        </Link>
      </div>
      <h2>{artPiece.name}</h2>
      <p>{artPiece.artist}</p>
    </article>
  );
}
