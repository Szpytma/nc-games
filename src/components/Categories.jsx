import { Button } from "react-bootstrap";
import * as api from "../api.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);
  function handleSubmit(event) {
    event.preventDefault();
  }

  useEffect(() => {
    api.fetchCategories().then((fetchedCategories) => {
      setCategories(fetchedCategories);
    });
  }, [setCategories]);

  return (
    <div className="ReviewList">
      <Link to={``}>
        <Button>all reviews</Button>
      </Link>
      {categories.map((category) => (
        <Link key={category.slug} to={`?category=${category.slug}`}>
          <Button
            onSubmit={handleSubmit}
            key={category.slug}
            description={category.description}
          >
            {category.slug}
          </Button>
        </Link>
      ))}
    </div>
  );
}
export default Categories;
