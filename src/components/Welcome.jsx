import { Link } from "react-router-dom";

function Welcome({ loggedUser, isLogged }) {
  return (
    <div>
      <h2>Welcome {loggedUser}</h2>
      {!isLogged && <p>Please log in to continue</p>}
      {isLogged && (
        <div>
          <h3>
            {" "}
            Check the <Link to={`/reviews`}>reviews</Link>
          </h3>
        </div>
      )}
    </div>
  );
}

export default Welcome;
