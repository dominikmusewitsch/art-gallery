import { useState } from "react";

export default function FavoriteButton() {
  const [isLike, setIsLike] = useState(false);

  function handleToggleLike() {
    setIsLike(!isLike);
  }

  return (
    <button type="button" onClick={handleToggleLike}>
      {isLike === false ? "🤍" : "❤️"}
    </button>
  );
}
