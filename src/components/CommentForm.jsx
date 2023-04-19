import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as api from "../api.js";
import LoadingSpinner from "./LoadingSpinner.jsx";

function CommentForm({
  review_id,
  setComments,
  comments,
  isLogged,
  loggedUser,
}) {
  const [comment, setComment] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
    setDisabled(false);
  };

  const handleSubmit = (event) => {
    setDisabled(true);
    event.preventDefault();
    api.postComment(review_id, loggedUser, comment).then((newComment) => {
      setComments([newComment, ...comments]);
      setSubmitted(true);
      setDisabled(true);
    });
    setComment("");
  };

  return (
    <div>
      {isLogged && (
        <Form onSubmit={handleSubmit}>
          {submitted && <p>Comment submitted successfully!</p>}
          {!submitted && disabled && <LoadingSpinner />}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Select defaultValue={loggedUser} required>
              <option value={loggedUser}>{loggedUser}</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Comment</Form.Label>
            <Form.Control
              value={comment}
              onChange={handleCommentChange}
              as="textarea"
              placeholder="Enter comment"
              required
            />
          </Form.Group>
          <Button type="submit" disabled={disabled}>
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
}
export default CommentForm;
