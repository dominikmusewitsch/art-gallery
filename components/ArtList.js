import styled from "styled-components";
import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtList({ data }) {
  return (
    <ArtListWrapper>
      {data.map((datum) => (
        <li key={datum.name}>
          <ArtPiecePreview datum={datum}></ArtPiecePreview>
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
