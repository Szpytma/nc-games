import { Link } from "react-router-dom";

function Header({ name, paragraph }) {
  return (
    <header>
      <Link to={"/"}>
        <h1>{name}</h1>
      </Link>

      <p>{paragraph}</p>

      <Link to={`/reviews`}>Reviews</Link>
    </header>
  );
}

export default Header;
