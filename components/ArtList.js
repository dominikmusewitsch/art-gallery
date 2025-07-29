import styled from "styled-components";
import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtList({ artPieces }) {
  return (
    <ArtListWrapper>
      {artPieces.map((datum) => (
        <li key={datum.name}>
          <ArtPiecePreview artPiece={datum}></ArtPiecePreview>
        </li>
      ))}
    </ArtListWrapper>
  );
}
const ArtListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
`;
