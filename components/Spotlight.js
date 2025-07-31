// import useSWR from "swr";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import Image from "next/image";
import styled from "styled-components";

// const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Spotlight({ data }) {
  // const {
  //   data: data,
  //   error,
  //   isLoading,
  // } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  // if (error) return <p>Fehler beim Laden der Daten.</p>;
  // if (isLoading) return <p>Lade...</p>;

  function getRandomArtPiece() {
    const randomNumber = Math.random() * data.length;
    const randomArrayIndex = Math.floor(randomNumber);
    return data[randomArrayIndex];
  }
  const randomArt = getRandomArtPiece();
  return (
    <ArtContainer key={randomArt.name}>
      <ImageWrapper>
        <FavoriteButton slug={randomArt.slug} />
        <Link href={`/gallery/${randomArt.slug}`}>
          <StyledImage
            src={randomArt.imageSource}
            alt={randomArt.name}
            width={300}
            height={0}
          />
        </Link>
      </ImageWrapper>
      <ArtistName>by {randomArt.artist}</ArtistName>
    </ArtContainer>
  );
}

const ArtContainer = styled.article`
  max-width: 600px;
  margin: 0 auto 80px auto;
  text-align: center;
  color: #444;
`;

const ArtistName = styled.p`
  margin-top: 24px;
`;
const ImageWrapper = styled.div`
  position: relative;
`;

const StyledImage = styled(Image)`
  height: auto;
  width: 100%;
  object-fit: contain;
`;
