import { Link } from "react-router-dom";
import "./ReviewStyles.css";
function ReviewCard({ review }) {
  return (
    <div className="ReviewCard">
      <li key={review.review_id}>
        <Link to={`/reviews/${review.review_id}`}>
          <h4>{review.title}</h4>
        </Link>
        <p>{review.designer}</p>
        <img src={review.review_img_url} alt="img" />
        <p>{review.votes}❤️</p>
      </li>
    </div>
  );
}

export default ReviewCard;
