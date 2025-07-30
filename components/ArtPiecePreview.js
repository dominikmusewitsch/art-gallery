import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";

export default function ArtPiecePreview({ artPiece }) {
  console.log(artPiece);
  return (
    <ArtContainer key={artPiece.name}>
      <div style={{ position: "relative" }}>
        <FavoriteButton slug={artPiece.slug} />
        <Link href={`/gallery/${artPiece.slug}`}>
          <Image
            src={artPiece.imageSource}
            alt={artPiece.name}
            width={300}
            height={0}
            style={{ height: "auto", width: "100%", objectFit: "contain" }}
          />
        </Link>
      </div>
      <ArtTitle>{artPiece.name}</ArtTitle>
      <ArtistName>by {artPiece.artist}</ArtistName>
    </ArtContainer>
  );
}

const ArtContainer = styled.article`
  max-width: 600px;
  margin: 0 auto 80px auto;
  text-align: center;
  color: #444;
`;

const ArtTitle = styled.h2`
  margin-bottom: 8px;
  margin-top: 30px;
`;

const ArtistName = styled.p`
  margin-top: 0;
`;
