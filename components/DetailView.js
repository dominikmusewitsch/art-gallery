import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import CommentDisplay from "./CommentDisplay";
import CommentForm from "./CommentForm";

export default function DetailView({ artPiece }) {
  return (
    <>
      <FavoriteButton />
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
      <CommentDisplay />
      <CommentForm />
    </>
  );
}
