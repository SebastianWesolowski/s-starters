import { IFeedBackErrorProps } from "./types";
import { Form } from "react-bootstrap";

const FeedBackError = ({ error }: IFeedBackErrorProps): JSX.Element => {
  return <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>;
};

export default FeedBackError;
