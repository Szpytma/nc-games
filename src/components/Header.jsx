import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Header({
  name,
  paragraph,
  users,
  username,
  setUsername,
  loggedUser,
  setLoggedUser,
  setIsLogged,
  isLogged,
}) {
  const handleLogout = () => {
    setUsername("");
    setLoggedUser("");
    setIsLogged(false);
  };
  const handleUserChange = async (event) => {
    setUsername(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    setLoggedUser(username);
    setIsLogged(true);
  };

  return (
    <header className="Header">
      <Link to={"/"}>
        <h1>{name}</h1>
      </Link>

      <h2>{paragraph}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Select
          id="user"
          value={username}
          onChange={handleUserChange}
          required
        >
          <option value="">Choose...</option>
          {users.map((user) => (
            <option key={user.username} value={user.username}>
              {user.username}
            </option>
          ))}
          )
        </Form.Select>
        {!isLogged && <Button type="submit">Login</Button>}
        {isLogged && (
          <Link to={"/"}>
            <Button onClick={handleLogout}>Logout</Button>
          </Link>
        )}
      </Form>
    </header>
  );
}

export default Header;
