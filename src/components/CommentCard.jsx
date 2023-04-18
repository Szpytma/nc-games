import * as api from "../api.js";
function CommentCard({ comment }) {
  const formatDate = (dataString) => {
    const date = new Date(dataString);
    const formattedDate = date.toLocaleString();
    return formattedDate;
  };

  const removeCommentByID = () => {
    api.removeCommentByID(comment.comment_id);
  };

  return (
    <div className="">
      <h3>{comment.body}</h3>
      <p>
        Posted by {comment.author} on {formatDate(comment.created_at)}
      </p>
      <p>❤️{comment.votes}</p>
      <button onClick={removeCommentByID}>Remove</button>
    </div>
  );
}

export default CommentCard;
