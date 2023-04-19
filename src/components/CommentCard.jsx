import { useState } from "react";
import * as api from "../api.js";
function CommentCard({ comment, comments, setComments, loggedUser }) {
  const formatDate = (dataString) => {
    const date = new Date(dataString);
    const formattedDate = date.toLocaleString();
    return formattedDate;
  };
  const [disabled, setDisabled] = useState(false);
  const [removed, setRemoved] = useState(false);
  const removeCommentByID = () => {
    setDisabled(true);
    setRemoved(true);
    api.removeCommentByID(comment.comment_id).then(() => {
      setComments(comments.filter((c) => c.comment_id !== comment.comment_id));
    });
  };

  return (
    <div className="">
      {removed && <p>comment removed</p>}
      <h3>{comment.body}</h3>
      <p>
        Posted by {comment.author} on {formatDate(comment.created_at)}
      </p>
      <p>❤️{comment.votes}</p>
      {loggedUser === comment.author && (
        <button onClick={removeCommentByID} disabled={disabled}>
          Remove
        </button>
      )}
    </div>
  );
}

export default CommentCard;
