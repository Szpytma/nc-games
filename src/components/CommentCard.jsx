function CommentCard({ comment }) {
  const formatDate = (dataString) => {
    const date = new Date(dataString);
    const formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    return formattedDate;
  };
  return (
    <div className="">
      <h3>{comment.body}</h3>
      <p>
        Posted by {comment.author} on {formatDate(comment.created_at)}
      </p>
      <p>❤️{comment.votes}</p>
    </div>
  );
}

export default CommentCard;
