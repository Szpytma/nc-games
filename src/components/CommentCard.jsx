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
  const [error, setError] = useState("");
  const removeCommentByID = () => {
    setDisabled(true);
    setRemoved(true);
    api
      .removeCommentByID(comment.comment_id)
      .then(() => {
        setComments(
          comments.filter((c) => c.comment_id !== comment.comment_id)
        );
      })
      .catch(() => {
        setDisabled(false);
        setRemoved(false);
        setError(
          "Failed to remove comment. Please check your internet connection and try again."
        );
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
        <div>
          <p>{error}</p>
          <button onClick={removeCommentByID} disabled={disabled}>
            Remove
          </button>
        </div>
      )}
    </div>
  );
}

export default CommentCard;
