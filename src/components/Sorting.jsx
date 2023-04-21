import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as api from "../api.js";

function Sorting({ selectedCategory }) {
  const [, setSortBy] = useState([]);
  const [isAsc, setIsAsc] = useState(false);
  useEffect(() => {
    api.fetchCategories().then((sortBy) => {
      setSortBy(sortBy);
    });
  }, [setSortBy]);

  function handleOrderChange() {
    setIsAsc(!isAsc);
  }
  return (
    <div>
      <div>
        <p>Order by:</p>

        <Link
          to={`?category=${selectedCategory}&order=${
            isAsc ? "asc" : "desc"
          }&sort_by=votes`}
        >
          <Button>Sort By Votes count</Button>
        </Link>
        <Link
          to={`?category=${selectedCategory}&order=${
            isAsc ? "asc" : "desc"
          }&sort_by=created_at`}
        >
          <Button>Sort By date</Button>
        </Link>
        <Link
          to={`?category=${selectedCategory}&order=${
            isAsc ? "asc" : "desc"
          }&sort_by=comment_count`}
        >
          <Button>Sort By comment count</Button>
        </Link>

        <Form.Check
          label="asc"
          type="checkbox"
          id="asc"
          checked={isAsc}
          onChange={handleOrderChange}
        />
      </div>
    </div>
  );
}

export default Sorting;
