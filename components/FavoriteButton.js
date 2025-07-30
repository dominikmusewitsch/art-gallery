import { useState } from "react";
import styled from "styled-components";
import useLocalStorage from "use-local-storage-state";

export default function FavoriteButton({ slug }) {
  const [favorites, setFavorites] = useLocalStorage("favorites", {
    defaultValue: [],
  });

  const [isLike, setIsLike] = useState(favorites.includes(slug));

  function handleToggleLike() {
    if (isLike) {
      //remove favorite
      const updatedFavorites = favorites.filter((zell) => zell !== slug);
      setIsLike(false);
      setFavorites(updatedFavorites);
    } else {
      //add favorite
      setIsLike(true);
      const updatedFavorites = [slug, ...favorites];
      setFavorites(updatedFavorites);
    }
  }

  return (
    <HerzButton
      type="button"
      onClick={handleToggleLike}
      style={{
        position: "absolute",
        bottom: "-15px",
        transform: "translateX(-50%)",
        left: "50%",
        background: "white",
        borderRadius: "50%",
        padding: "4px",
        cursor: "pointer",
        zIndex: 2,
      }}
    >
      {isLike === false ? "🤍" : "❤️"}
    </HerzButton>
  );
}

const HerzButton = styled.button`
  font-size: 1.25rem;
`;
