import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <h2>
        Check the <Link to={`/reviews`}>reviews</Link>
      </h2>
    </div>
  );
}

export default Welcome;
