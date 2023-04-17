import { Link } from "react-router-dom";

function Header({ name, paragraph }) {
  return (
    <header className="Header">
      <Link to={"/"}>
        <h1>{name}</h1>
      </Link>

      <h2>{paragraph}</h2>

      <Link to={`/reviews`}>Reviews</Link>
    </header>
  );
}

export default Header;
