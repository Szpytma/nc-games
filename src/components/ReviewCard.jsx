import { Link } from "react-router-dom";
import "./ReviewStyles.css";

function ReviewCard({ review }) {
  const formatDate = (dataString) => {
    const date = new Date(dataString);
    const formattedDate = date.toLocaleString();
    return formattedDate;
  };
  return (
    <div className="ReviewCard">
      <Link to={`/reviews/${review.review_id}`}>
        <h2>{review.title}</h2>
      </Link>
      <p>{review.designer}</p>
      <p>{formatDate(review.created_at)}</p>
      <img src={review.review_img_url} alt="img" />
      <p>
        {review.votes}❤️ ✍️{review.comment_count}
      </p>
    </div>
  );
}

export default ReviewCard;
