import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CommentForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formUserName">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="comment">
        <Form.Label>Comment</Form.Label>
        <Form.Control type="text" placeholder="Comment" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
export default CommentForm;
