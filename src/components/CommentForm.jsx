import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as api from "../api.js";

function CommentForm({ review_id, setComments, comments }) {
  const [comment, setComment] = useState("");
  const [user, setUsername] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleUserChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    api.postComment(review_id, user, comment).then((newComment) => {
      setComments([newComment, ...comments]);
    });
    setComment("");
    setUsername("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Select value={user} onChange={handleUserChange} required>
          <option value="">Choose...</option>
          <option value="tickle122">tickle122</option>
          <option value="grumpy19">grumpy19</option>
          <option value="happyamy2016">happyamy2016</option>
          <option value="cooljmessy">cooljmessy</option>
          <option value="weegembump">weegembump</option>
          <option value="jessjelly">jessjelly</option>
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

      <Button type="submit">Submit</Button>
    </Form>
  );
}
export default CommentForm;
