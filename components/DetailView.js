import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import CommentDisplay from "./CommentDisplay";
import CommentForm from "./CommentForm";
import useLocalStorage from "use-local-storage-state";
import ColorPalette from "./ColorPalette";
import styled from "styled-components";

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
      <ArtContainer style={{ position: "relative" }}>
        <FavoriteButton slug={artPiece.slug} />
        <Image
          src={artPiece.imageSource}
          layout="responsive"
          width={3}
          height={4}
          alt={artPiece.name}
        />
      </ArtContainer>
      <ColorPaletteWrapper>
        <ColorPalette artPiece={artPiece} />
      </ColorPaletteWrapper>
      <InfoWrapper>
        <h2>{artPiece.artist}</h2>
        <p>» {artPiece.name} « </p>
        <p>Year: {artPiece.year}</p>
        <p>Genre: {artPiece.genre}</p>
      </InfoWrapper>
      <CommentWrapper>
        <CommentHeader>Comments</CommentHeader>
        <CommentDisplay comments={pieceComments} />
        <CommentForm onAddComment={handleAddComment} />
      </CommentWrapper>
    </>
  );
}

const ArtContainer = styled.article`
  max-width: 600px;
  margin: 0 auto 40px auto;
  text-align: center;
  color: grey;
`;

const ColorPaletteWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto 40px auto;
`;

const InfoWrapper = styled.div`
  max-width: 600px;
  margin: 60px auto 80px auto;
  color: #444;
`;

const CommentWrapper = styled.div`
  max-width: 600px;
  margin: 60px auto 60px auto;
  color: #444;
`;

const CommentHeader = styled.h3`
  text-align: right;
`;
