export default function ColorPalette({ artPiece }) {
  console.log(artPiece.colors);

  return (
    <ul>
      {artPiece.colors.map((color, index) => (
        <li key={index}>
          <div
            style={{
              background: color,
              height: "20px",
              width: "20px",
              borderRadius: "50%",
            }}
          ></div>
        </li>
      ))}
    </ul>
  );
}
