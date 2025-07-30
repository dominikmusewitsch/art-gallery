import { useState } from "react";
import styled from "styled-components";

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
    <StyledFormWrapper onSubmit={handleSubmit}>
      <label htmlFor="comment"></label>
      <textarea
        id="comment"
        type="text"
        value={text}
        placeholder="Add your comment here..."
        rows={4}
        onChange={(event) => setText(event.target.value)}
        required
      ></textarea>
      <StyledSubmitButton type="submit">Send</StyledSubmitButton>
    </StyledFormWrapper>
  );
}

const StyledFormWrapper = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 30px auto 0 auto;
  gap: 8px;
`;

const StyledSubmitButton = styled.button`
  background-color: grey;
  color: white;
  border-style: none;
  padding: 8px 16px;
  display: block;
  margin: 0 auto;
  width: fit-content;
  min-width: 120px;


`;
