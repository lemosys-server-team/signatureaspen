import React, { Component } from "react";
import { Col, Row, Card, Container } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';


export default class Home extends Component {
   
    render() {
        return (
            <main>
            <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
              <Container>
                
                <Row className="justify-content-center form-bg-image">
                  <Col xs={12} className="d-flex align-items-center justify-content-center">
                    <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                      <div className="text-center text-md-center mb-4 mt-md-0">
                        <h3 className="mb-0">Social Cleaner</h3>
                      </div>
                    </div>
                  </Col>
                </Row>
                <p className="text-center">
                    <Card.Link as={Link} to="/login" className="text-gray-700">
                       Login
                    </Card.Link>
                    <Card.Link as={Link} to="/admin/dashboard" className="text-gray-700">
                       Dashboard
                    </Card.Link>
                </p>
              </Container>
            </section>
          </main>
          );
    }
  }