import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";

export default function ArtPiecePreview({ datum }) {
  console.log(datum);
  return (
    <ArtContainer key={datum.name} data-testid="art-piece-preview">
      <ImageWrapper>
        <FavoriteButton slug={datum.slug} />
        <Link href={`/gallery/${datum.slug}`}>
          <StyledImage
            src={datum.imageSource}
            alt={datum.name}
            width={300}
            height={0}
          />
        </Link>
      </ImageWrapper>
      <ArtTitle>{datum.name}</ArtTitle>
      <ArtistName>by {datum.artist}</ArtistName>
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
