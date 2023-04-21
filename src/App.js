import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ReviewList from "./components/ReviewList";
import Review from "./components/Review";
import Welcome from "./components/Welcome";
import CommentList from "./components/CommentList";
import ErrorPageNotFound from "./components/ErrorPageNotFound";
import * as api from "./api.js";
import { useEffect, useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [loggedUser, setLoggedUser] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    api.fetchUsers().then((users) => {
      setUsers(users);
    });
  }, [setUsers]);

  return (
    <div className="App">
      <Header
        className="Header"
        name="NC Games"
        paragraph="No boredom on our board games."
        users={users}
        username={username}
        setUsername={setUsername}
        loggedUser={loggedUser}
        setLoggedUser={setLoggedUser}
        isLogged={isLogged}
        setIsLogged={setIsLogged}
      />
      <Routes>
        <Route
          path="/"
          element={<Welcome loggedUser={loggedUser} isLogged={isLogged} />}
        />
        <Route path="/reviews" element={<ReviewList />} />
        <Route
          path="/reviews/:review_id"
          element={<Review loggedUser={loggedUser} isLogged={isLogged} />}
        />
        <Route
          path="/reviews/:review_id/comments"
          element={<CommentList loggedUser={loggedUser} />}
        />
        <Route
          path="*"
          element={<ErrorPageNotFound message="404 - Page not found" />}
        />
      </Routes>

      <Footer className="Footer" />
    </div>
  );
}

export default App;
