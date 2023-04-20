import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import * as api from "../api.js";
import { Link } from "react-router-dom";

function Sorting({ searchQueryCategory, searchQueryOrder, searchQuerySortBy }) {
  const [, setSort] = useState([]);
  //   const [desc, setDesc] = useState("desc");

  useEffect(() => {
    api.fetchCategories().then((sortBy) => {
      setSort(sortBy);
    });
  }, [setSort]);
  //TODO implement checkbox for asc
  /* created_at
    api/reviews?order=desc&sort_by=created_at
    api/reviews?order=asc&sort_by=created_at */

  /*comment_count
    api/reviews?order=desc&sort_by=comment_count
    api/reviews?order=asc&sort_by=comment_count*/

  /*VOTES
    api/reviews?order=desc&sort_by=votes
    api/reviews?order=asc&sort_by=votes*/
  return (
    <div>
      <div>
        <p>Descending order</p>
        <Link to={`?order=desc&sort_by=votes`}>
          <Button>Sort By Votes count </Button>
        </Link>
        <Link to={`?order=desc&sort_by=created_at`}>
          <Button>Sort By date </Button>
        </Link>
        <Link to={`?order=desc&sort_by=comment_count`}>
          <Button>Sort By comment count </Button>
        </Link>
      </div>
      <p>Ascending order</p>
      <Link to={`?order=asc&sort_by=votes`}>
        <Button>Sort By Votes count </Button>
      </Link>
      <Link to={`?order=asc&sort_by=created_at`}>
        <Button>Sort By date </Button>
      </Link>
      <Link to={`?order=asc&sort_by=comment_count`}>
        <Button>Sort By comment count </Button>
      </Link>
    </div>
  );
}

export default Sorting;
