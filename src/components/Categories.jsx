import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import * as api from "../api.js";
import Sorting from "./Sorting.jsx";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelect = async (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
  };

  useEffect(() => {
    api.fetchCategories().then((fetchedCategories) => {
      setCategories(fetchedCategories);
    });
  }, [setCategories]);
  return (
    <div>
      <div>
        {" "}
        <Form>
          <Form.Group controlId="categorySelect">
            <Form.Label>Filter by category:</Form.Label>
            <Form.Select onChange={handleSelect}>
              <option value="">All reviews</option>
              {categories.map((category) => (
                <option key={category.slug} value={category.slug}>
                  {category.slug}
                </option>
              ))}
            </Form.Select>
          </Form.Group>{" "}
          <Link to={`?category=${selectedCategory}`}>
            {" "}
            <Button>Change category</Button>
          </Link>
        </Form>
      </div>

      <Sorting selectedCategory={selectedCategory} />
    </div>
  );
}
export default Categories;
