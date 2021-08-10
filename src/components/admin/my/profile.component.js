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
          <h4>My Profile</h4>
          <p className="mb-0">Edit Profile</p>
        </div>
        
      </div>

      <Row style={{overflow: "hidden"}}>
        <Col xs={12} xl={12}>
        <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
            <Form>
                <Row>
                    <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control required type="text" placeholder="Enter your first name" />
                    </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                    <Form.Group id="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control required type="text" placeholder="Also your last name" />
                    </Form.Group>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col md={6} className="mb-3">
                    <Form.Group id="birthday">
                        <Form.Label>Birthday</Form.Label>
                        <Datetime
                        timeFormat={false}
                        onChange={setBirthday}
                        renderInput={(props, openCalendar) => (
                            <InputGroup>
                            <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                            <Form.Control
                                required
                                type="text"
                                value={birthday ? moment(birthday).format("MM/DD/YYYY") : ""}
                                placeholder="mm/dd/yyyy"
                                onFocus={openCalendar}
                                onChange={() => { }} />
                            </InputGroup>
                        )} />
                    </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                    <Form.Group id="gender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select defaultValue="0">
                        <option value="0">Gender</option>
                        <option value="1">Female</option>
                        <option value="2">Male</option>
                        </Form.Select>
                    </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="mb-3">
                    <Form.Group id="emal">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" placeholder="name@company.com" />
                    </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                    <Form.Group id="phone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control required type="number" placeholder="+12-345 678 910" />
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
