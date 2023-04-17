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
          <ReviewCard key={review.review_id} review={review} />
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;
