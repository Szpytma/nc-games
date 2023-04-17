import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ReviewList from "./components/ReviewList";

function App() {
  return (
    <div className="App">
      <Header
        className="Header"
        name="NC Games"
        paragraph="No boredom on our board games."
      />
      <ReviewList />
      <Footer className="Footer" />
    </div>
  );
}

export default App;
