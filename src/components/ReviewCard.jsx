import { Link } from "react-router-dom";
import "./ReviewStyles.css";

function ReviewCard({ review }) {
  return (
    <div className="ReviewCard">
      <Link to={`/reviews/${review.review_id}`}>
        <h2>{review.title}</h2>
      </Link>
      <p>{review.designer}</p>
      <img src={review.review_img_url} alt="img" />
      <p>
      {/* TODO fix the api to get the count on review*/}
        {review.votes}❤️ ✍️{0}
      </p>
    </div>
  );
}

export default ReviewCard;
