import { useParams } from "react-router";
import * as api from "../api.js";
import { useEffect, useState } from "react";

function Review() {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.fetchReviewById(review_id).then((review) => {
      setReview(review);
      setIsLoading(false);
    });
  }, [review_id]);

  return isLoading ? (
    <p>is loading...</p>
  ) : (
    <div className="Review">
      <h2>{review.title}</h2>
      <p>{review.review_body}</p>
      <p>{review.category}</p>
      <p>{review.designer}</p>
      <p>{review.owner}</p>
      <p>{review.created_at}</p>
      <p>{review.votes}</p>
      <p>{review.comment_count}</p>
      <img src={review.review_img_url} alt="img" />
    </div>
  );
}

export default Review;
