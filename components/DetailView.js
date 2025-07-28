import Image from "next/image";

export default function DetailView({ artPiece }) {
  return (
    <>
      <Image
        src={artPiece.imageSource}
        width={400}
        height={400}
        alt={artPiece.name}
      />
      <h2>{artPiece.artist}</h2>
      <p>{artPiece.name}</p>
      <p>{artPiece.year}</p>
      <p>{artPiece.genre}</p>
    </>
  );
}
