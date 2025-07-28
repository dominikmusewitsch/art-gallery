import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtList({artPieces}) {
  return (
    <ul>
      {artPieces.map((datum) => (
        <li key={datum.name}>
          <ArtPiecePreview artPiece={datum}></ArtPiecePreview>
        </li>
      ))}
    </ul>
  );
}
