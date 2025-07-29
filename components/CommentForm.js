import { useState } from "react";

export default function CommentForm({ onAddComment }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target; // das gesamte <form>-Element
    const formElements = form.elements; // enthält alle Input-Felder

    const inputValue = formElements.comment.value.trim(); // "comment" ist das id/name-Attribut des Inputs

    if (!inputValue) return; // keine leeren Kommentare

    onAddComment(inputValue); // Übergibt Text an DetailView

    form.reset();
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
