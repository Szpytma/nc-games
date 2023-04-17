import { useEffect, useState } from "react";
import * as api from "../api.js";
import { useParams } from "react-router";

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
    <div className="ReviewList">
      {comments.map((comment) => (
        <h1>{comment.body}</h1>
        /* <CommentCard key={comment.review_id} comment={comment} /> */
      ))}
    </div>
  );
}

export default CommentList;
