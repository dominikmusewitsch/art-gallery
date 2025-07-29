import styled from "styled-components";

export default function ColorPalette({ artPiece }) {
  console.log(artPiece.colors);

  return (
    <ListWrapper>
      {artPiece.colors.map((color, index) => (
        <li key={index} style={{ flex: 1 }}>
          <ColorBlock
            style={{
              background: color,
            }}
          ></ColorBlock>
        </li>
      ))}
    </ListWrapper>
  );
}

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-direction: row;
  justify-content: space-between;
`;

const ColorBlock = styled.div`
  width: 100%;
  height: 20px;
`;
