import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ReviewCard from "./ReviewCard.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";
import * as api from "../api.js";
import "./ReviewStyles.css";
import { Button } from "react-bootstrap";

function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");

  const searchQueryCategory = searchParams.get("category");
  const searchQuerySortBy = searchParams.get("sort_by");
  const searchQueryOrder = searchParams.get("order");

  const setCategory = (category) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("category", category);
    setSearchParams(newParams);
    setCurrentCategory(category);
  };

  const setSortBy = (sort_by) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", sort_by);
    setSearchParams(newParams);
  };
  const setOrderBy = (order) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", order);
    setSearchParams(newParams);
  };

  useEffect(() => {
    api.fetchCategories().then((fetchedCategories) => {
      setCategories(fetchedCategories);
    });
  }, [setCategories]);
  useEffect(() => {
    api
      .fetchReviews(searchQueryCategory, searchQueryOrder, searchQuerySortBy)
      .then((reviews) => {
        setReviews(reviews);
        setIsLoading(false);
      });
  }, [searchQueryCategory, searchQueryOrder, searchQuerySortBy, setReviews]);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setCategory(category, searchQueryOrder, searchQuerySortBy);
  };

  const handleSortOptionChange = (option) => {
    setSortBy(option);
  };

  const handleOrderChange = (option) => {
    setOrderBy(option);
  };

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div>
      <div>
        <label htmlFor="category-select">Category: </label>
        <select
          id="category-select"
          value={currentCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.slug}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Button onClick={() => handleSortOptionChange("created_at")}>
          Date
        </Button>
        <Button onClick={() => handleSortOptionChange("votes")}>Votes</Button>
        <Button onClick={() => handleSortOptionChange("comment_count")}>
          Comments
        </Button>
      </div>
      <div>
        <Button onClick={() => handleOrderChange("asc")}>ASC</Button>
        <Button onClick={() => handleOrderChange("desc")}>DESC</Button>
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
