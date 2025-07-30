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

    setText("");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Add comment:</label>
      <textarea
        id="comment"
        type="text"
        value={text}
        placeholder="Write your comment here..."
        rows={4}
        onChange={(event) => setText(event.target.value)}
        required
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
}
