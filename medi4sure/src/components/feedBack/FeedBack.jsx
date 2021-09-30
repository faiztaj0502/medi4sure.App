import { Row, Col, Form, Button } from "react-bootstrap";
import "./Feedback.css";
export const FeedBack = () => {
    return (
        <div>
            <Form>
                <Form.Control className="fbrow" placeholder="Enter Title" />
                <Form.Control as="textarea" placeholder="Enter FeedBack" />
                <Row className="fbrow">
                    <Col lg={8}></Col>
                    <Col lg={2}>
                        <Button size="sm">Submit</Button>{" "}<Button size="sm">Cancel</Button>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
            </Form>
        </div>

    );
};