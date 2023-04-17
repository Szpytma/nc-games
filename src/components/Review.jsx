import { useParams } from "react-router";
import * as api from "../api.js";
import { useEffect, useState } from "react";

function Review() {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const formatDate = (dataString) => {
    const date = new Date(dataString);
    const formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    return formattedDate;
  };

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
      <p>Posted: {formatDate(review.created_at)}</p>
      <p>Votes :{review.votes}</p>
      <p>Comments: {review.comment_count}</p>
      <img src={review.review_img_url} alt="img" />
    </div>
  );
}

export default Review;
