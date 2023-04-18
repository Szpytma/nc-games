import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ReviewList from "./components/ReviewList";
import Review from "./components/Review";
import Welcome from "./components/Welcome";
import CommentList from "./components/CommentList";

function App() {
  return (
    <div className="App">
      <Header
        className="Header"
        name="NC Games"
        paragraph="No boredom on our board games."
      />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/reviews" element={<ReviewList />} />
        <Route path="/reviews/:review_id" element={<Review />} />
        <Route path="/reviews/:review_id/comments" element={<CommentList />} />
      </Routes>

      <Footer className="Footer" />
    </div>
  );
}

export default App;
