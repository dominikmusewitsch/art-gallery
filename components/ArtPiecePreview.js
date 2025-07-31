import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";

export default function ArtPiecePreview({ artPiece }) {
  console.log(artPiece);
  return (
    <ArtContainer key={artPiece.name} data-testid="art-piece-preview">
      <ImageWrapper>
        <FavoriteButton slug={artPiece.slug} />
        <Link href={`/gallery/${artPiece.slug}`}>
          <StyledImage
            src={artPiece.imageSource}
            alt={artPiece.name}
            width={300}
            height={0}
          />
        </Link>
      </ImageWrapper>
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
  margin-top: 24px;
`;

const ArtistName = styled.p`
  margin-top: 0;
`;

const ImageWrapper = styled.div`
  position: relative;
`;
const StyledImage = styled(Image)`
  height: auto;
  width: 100%;
  object-fit: contain;
`;
