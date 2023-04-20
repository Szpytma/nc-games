import { useEffect, useState } from "react";
import * as api from "../api.js";
import ReviewCard from "./ReviewCard.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";
import "./ReviewStyles.css";
import Categories from "./Categories.jsx";
import { useSearchParams } from "react-router-dom";

function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  // const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("category");

  useEffect(() => {
    api.fetchReviews(searchQuery).then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [searchQuery, setReviews]);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div>
      <div>
        <Categories />
      </div>
      <div className="ReviewList">
        {reviews.map((review) => (
          <ReviewCard
            key={review.review_id}
            review={review}
            comments={review.comments}
          />
        ))}
      </div>
    </div>
  );
}

export default ReviewList;
