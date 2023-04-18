import { useEffect, useState } from "react";
import * as api from "../api.js";
import { useParams } from "react-router";
import CommentCard from "./CommentCard.jsx";
import "./CommentsStyles.css";

function CommentList() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { review_id } = useParams();
  useEffect(() => {
    api.fetchCommentsByReviewId(review_id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [review_id]);

  return isLoading ? (
    <p>is loading...</p>
  ) : (
    <div className="CommentCard">
      {comments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} />
      ))}
      <button>add new comment</button>
    </div>
  );
}

export default CommentList;
