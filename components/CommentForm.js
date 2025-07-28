import { useState } from "react";

export default function CommentForm({ onAddComment }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!text.trim())
      return; /* verhindert dass man leere Kommentare posten kann */
    onAddComment(text.trim()); /* übergibt Text an DetailView */
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Add comment:</label>
      <input
        id="comment"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        required
      ></input>
      <button type="submit">Send</button>
    </form>
  );
}
