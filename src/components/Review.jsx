import { useParams } from "react-router";
import * as api from "../api.js";
import { useEffect, useState } from "react";
import CommentList from "./CommentList.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";
import { Link } from "react-router-dom";

function Review({ loggedUser, isLogged }) {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [likeDisabled, setLikeDisabled] = useState(false);
  const [dislikeDisabled, setDislikeDisabled] = useState(false);

  const formatDate = (dataString) => {
    const date = new Date(dataString);
    const formattedDate = date.toLocaleString();
    return formattedDate;
  };

  // TODO allow user to unclick like /dislike button
  const handleClickLike = () => {
    if (likeDisabled) {
      setLikeDisabled(false);
      api.patchReviewVotesDeduct(review_id).then((updatedReview) => {
        setReview(updatedReview);
      });
    } else {
      setLikeDisabled(true);
      setDislikeDisabled(false);
      api.patchReviewVotesAdd(review_id).then((updatedReview) => {
        setReview(updatedReview);
      });
    }
  };

  const handleClickDislike = () => {
    if (dislikeDisabled) {
      setDislikeDisabled(false);
      api.patchReviewVotesAdd(review_id).then((updatedReview) => {
        setReview(updatedReview);
      });
    } else {
      setDislikeDisabled(true);
      setLikeDisabled(false);
      api.patchReviewVotesDeduct(review_id).then((updatedReview) => {
        setReview(updatedReview);
      });
    }
  };

  useEffect(() => {
    api.fetchReviewById(review_id).then((review) => {
      setReview(review);
      setIsLoading(false);
    });
  }, [review_id]);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="Review">
      <Link to={"/reviews"}>Go back to reviews</Link>
      <h2>{review.title}</h2>
      <p>{review.review_body}</p>
      <p>{review.category}</p>
      <p>{review.designer}</p>
      <p>{review.owner}</p>
      <p>Posted: {formatDate(review.created_at)}</p>
      {isLogged && (
        <p>
          <button onClick={handleClickLike} disabled={likeDisabled}>
            👍
          </button>
          Votes {review.votes}{" "}
          <button onClick={handleClickDislike} disabled={dislikeDisabled}>
            👎
          </button>
        </p>
      )}
      {!isLogged && (
        <p>
          <button disabled={true}>👍</button>
          Votes {review.votes} <button disabled={true}>👎</button>
        </p>
      )}
      <img src={review.review_img_url} alt="img" />
      <p>Comments: </p>
      <CommentList loggedUser={loggedUser} isLogged={isLogged} />
    </div>
  );
}

export default Review;
