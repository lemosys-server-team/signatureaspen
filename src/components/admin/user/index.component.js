import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <>
      <div style={{overflow: "hidden"}} className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <h4>User</h4>
          <p className="mb-0">User listing...</p>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <ButtonGroup>
          <Link to="/admin/user/add" ><Button variant="outline-primary" size="sm"><FontAwesomeIcon icon={faPlus} />Add User</Button></Link>
          </ButtonGroup>
        </div>
      </div>

      {/* ..table goes here */}

      
    </>
  );
};
