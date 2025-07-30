import styled from "styled-components";

export default function CommentDisplay({ comments }) {
  if (!comments || comments.length === 0) {
    return <CommentText>No comments yet.</CommentText>;
  }

  return (
    <CommentDisplayWrapper>
      {comments.map((comment, index) => (
        <li key={index}>
          <CommentText>{comment.text}</CommentText>
          <TimeStamp>{new Date(comment.date).toLocaleString()}</TimeStamp>
        </li>
      ))}
    </CommentDisplayWrapper>
  );
}

// hier auf jeden fall ein if statement dass wenn es keine comments gibt hier eine nachricht stehen soll

const CommentDisplayWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const CommentText = styled.p`
  margin-bottom: 0;
  align-items: flex-end;
  text-align: right;
`;

const TimeStamp = styled.p`
  font-size: 0.75em;
  color: grey;
  margin-top: 0;
  align-items: flex-end;
  text-align: right;
`;
