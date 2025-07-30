import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";
import DetailView from "@/components/DetailView";
import { IconArrowLeft } from "@tabler/icons-react";
import styled from "styled-components";

export default function Detail() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (isLoading) return <p>Lade...</p>;
  if (error) return <p>Fehler!</p>;

  const artPiece = data.find((piece) => piece.slug === slug);

  console.log(artPiece);

  return (
    <>
      {/* <Link href="/gallery">back</Link> */}
      <StyledBackLink href="/gallery">
        <IconArrowLeft /> Back to Gallery
      </StyledBackLink>

      <DetailView artPiece={artPiece} />
    </>
  );
}

const StyledBackLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: grey;
  margin: 0 auto 30px auto;
  width: fit-content;

  &:hover {
    color: #444;
  }
`;
