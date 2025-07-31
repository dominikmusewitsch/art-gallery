import styled from "styled-components";

export default function ColorPalette({ artPiece }) {
  console.log(artPiece.colors);

  return (
    <ListWrapper>
      {artPiece.colors.map((color, index) => (
        <ListItem key={index}>
          <ColorBlock
            style={{
              background: color,
            }}
          ></ColorBlock>
        </ListItem>
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

const ListItem = styled.li`
  flex: 1;
`;
