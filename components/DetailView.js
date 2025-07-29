import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import CommentDisplay from "./CommentDisplay";
import CommentForm from "./CommentForm";
import useLocalStorage from "use-local-storage-state";
import ColorPalette from "./ColorPalette";

export default function DetailView({ artPiece }) {
  const [comments, setComments] = useLocalStorage("comments", {
    defaultValue: [],
  });

  // Neue Kommentare hinzufügen
  function handleAddComment(text) {
    const newComment = {
      slug: artPiece.slug,
      text,
      date: new Date().toISOString(),
    };
    setComments((prev) => [...prev, newComment]);
  }
  // Nur Kommentare für dieses Kunstwerk anzeigen
  const pieceComments = comments.filter(
    (comment) => comment.slug === artPiece.slug
  );

  return (
    <>
      <div style={{ position: "relative" }}>
        <FavoriteButton slug={artPiece.slug} />
        <Image
          src={artPiece.imageSource}
          layout="responsive"
          width={3}
          height={4}
          alt={artPiece.name}
        />
      </div>
      <ColorPalette artPiece={artPiece} />
      <h2>{artPiece.artist}</h2>
      <p>{artPiece.name}</p>
      <p>{artPiece.year}</p>
      <p>{artPiece.genre}</p>

      <h3>Comments</h3>
      <CommentDisplay comments={pieceComments} />
      <CommentForm onAddComment={handleAddComment} />
    </>
  );
}
