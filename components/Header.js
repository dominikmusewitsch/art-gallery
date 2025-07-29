import styled from "styled-components";

export default function Header() {
  return <Headline>Art Gallery</Headline>;
}

const Headline = styled.h1`
  display: flex;
  justify-content: center;
  position: relative;
  top: 0;
  padding: 0.5rem 0 0.7rem;
  color: grey;
  font-size: 36px;
  margin-top: 0;
  margin-bottom: 50px;
`;
