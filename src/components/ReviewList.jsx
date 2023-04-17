import { useEffect, useState } from "react";
import * as api from "../api.js";
import ReviewCard from "./ReviewCard.jsx";
import "./ReviewStyles.css";

function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    api.fetchReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [setReviews]);

  return isLoading ? (
    <p>is loading...</p>
  ) : (
    <div className="ReviewList">
      <ul>
        {reviews.map((review) => (
          <ReviewCard
            key={review.review_id}
            review_id={review.review_id}
            title={review.title}
            category={review.category}
            designer={review.designer}
            owner={review.owner}
            review_body={review.review_body}
            review_img_url={review.review_img_url}
            created_at={review.created_at}
            votes={review.votes}
          />
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;
