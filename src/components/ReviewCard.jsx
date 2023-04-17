import "./ReviewStyles.css";
function ReviewCard({ review }) {
  return (
    <div className="ReviewCard">
      <li key={review.review_id}>
        <h4>{review.title}</h4>
        <p>{review.designer}</p>
        <img src={review.review_img_url} alt="img" />
        <p>{review.votes}❤️</p>
      </li>
    </div>
  );
}

export default ReviewCard;
