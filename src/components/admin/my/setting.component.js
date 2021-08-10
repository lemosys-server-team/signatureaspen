import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup,ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';


export default () => {
  const [birthday, setBirthday] = useState("");
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <h4>My Setting</h4>
          <p className="mb-0">Edit Setting</p>
        </div>
        
      </div>

      <Row style={{overflow: "hidden"}}>
        <Col xs={12} xl={12}>
        <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
            <Form>
                <Row>
                    <Col md={6} className="mb-3">
                    <Form.Group id="contact_email">
                        <Form.Label>Contact Email</Form.Label>
                        <Form.Control required type="email" placeholder="Enter Contact Email" />
                    </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                    <Form.Group id="contact_number">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control required type="text" placeholder="Also Contact Number" />
                    </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="mb-3">
                    <Form.Group id="twitter_url">
                        <Form.Label>Address</Form.Label>
                        <Form.Control required as="textarea" col={3} placeholder="Enter Address" />
                    </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="mb-3">
                    <Form.Group id="twitter_url">
                        <Form.Label>Twitter Url</Form.Label>
                        <Form.Control required type="text" placeholder="Enter Twitter Url" />
                    </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                    <Form.Group id="facebok_url">
                        <Form.Label>Facebook Url</Form.Label>
                        <Form.Control required type="text" placeholder="Also Facebook Url" />
                    </Form.Group>
                    </Col>
                </Row>
                
                <Row>
                    <Col md={3} className="mb-3">
                    <Form.Group id="emal">
                        <Form.Label>Logo</Form.Label>
                        <Form.Control required type="file"  />
                    </Form.Group>
                    </Col>
                    <Col md={3} className="mb-3">
                    <Form.Group id="phone">
                        <Form.Label>Fav Icon</Form.Label>
                        <Form.Control required type="file"  />
                    </Form.Group>
                    </Col>
                </Row>

                <div className="mt-3">
                    <Button variant="primary" type="submit">Save All</Button>
                </div>
            </Form>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </>
  );
};
