export default function CommentDisplay({ comments }) {
  if (!comments || comments.length === 0) {
    return <p>No comments yet.</p>;
  }

  return (
    <ul>
      {comments.map((comment, index) => (
        <li key={index}>
          <p>{comment.text}</p>
          <p>{new Date(comment.date).toLocaleString()}</p>
        </li>
      ))}
    </ul>
  );
}

// hier auf jeden fall ein if statement dass wenn es keine comments gibt hier eine nachricht stehen soll
