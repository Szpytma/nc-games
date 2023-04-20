import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ReviewCard from "./ReviewCard.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";
import Categories from "./Categories.jsx";
import Sorting from "./Sorting.jsx";
import * as api from "../api.js";
import "./ReviewStyles.css";

function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const searchQueryCategory = searchParams.get("category");
  const searchQuerySortBy = searchParams.get("sort_by");
  const searchQueryOrder = searchParams.get("order");

  useEffect(() => {
    api
      .fetchReviews(searchQueryCategory, searchQueryOrder, searchQuerySortBy)
      .then((reviews) => {
        setReviews(reviews);
        setIsLoading(false);
      });
  }, [searchQueryCategory, searchQueryOrder, searchQuerySortBy, setReviews]);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div>
      <Categories />
      <Sorting />

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
