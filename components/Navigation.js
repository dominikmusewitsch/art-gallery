import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Navigation({ artPiece }) {
  const router = useRouter();
  return (
    <MainNav>
      <WrapperNavList>
        <LinkItem>
          <StyledNavLink href="/" $active={router.pathname === "/"}>
            Spotlight
          </StyledNavLink>
        </LinkItem>
        <LinkItem>
          <StyledNavLink
            href="/gallery"
            $active={
              router.pathname === "/gallery" ||
              router.pathname.startsWith("/gallery")
            }
          >
            Gallery
          </StyledNavLink>
        </LinkItem>
        <LinkItem>
          <StyledNavLink
            href="/favorites"
            $active={router.pathname === "/favorites"}
          >
            Favorites
          </StyledNavLink>
        </LinkItem>
      </WrapperNavList>
    </MainNav>
  );
}
const MainNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: grey;
  z-index: 100;
`;
// List-Wrapper
const WrapperNavList = styled.ul`
  list-style: none;
  display: flex;
  background-color: grey;
  font-size: 18px;
  font-weight: bold;
  padding: 0;
  margin: 0;
`;

// Einzelnes List-Item mit Link-Styling
const LinkItem = styled.li`
  flex: 1;
  border-right: 1px solid rgb(99, 99, 99);

  &:last-child {
    border-right: none;
  }

`;
const StyledNavLink = styled(Link)`
  display: grid;
  place-content: center;
  height: 60px;
  width: 100%;
  color: ${(props) => (props.$active ? "white" : "#e0e0e0")};
  background-color: ${(props) => (props.$active ? "#444" : "transparent")};
  text-decoration: none;
  transition: all 0.3s ease-in-out;
`;
