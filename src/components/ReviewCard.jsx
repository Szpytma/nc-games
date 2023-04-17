import "./ReviewStyles.css";
function ReviewCard({
  review_id,
  title,
  category,
  designer,
  owner,
  review_body,
  review_img_url,
  created_at,
  votes,
}) {
  return (
    <div className="ReviewCard">
      <li key={review_id}>
        <h4>{title}</h4>
        <p>{designer}</p>
        <img src={review_img_url} alt="img" />
        <p>{votes}❤️</p>
      </li>
    </div>
  );
}

export default ReviewCard;
