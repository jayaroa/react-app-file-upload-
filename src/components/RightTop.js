import '../styles/RightTop.css';
import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import { Dropdown } from 'react-bootstrap';
import { 
  Container, 
  Row, 
  Col,
  Button 
} from 'react-bootstrap';

const RightTop = () => {
  return (
    <Row id="right-top-container">
      <Col id="right-top-col-1-add-folder-btn">
        <Button variant="dark" className="right-top-add-folder-btn">
          <i className="fas fa-plus fa-xs" /> Add Folder
        </Button>
      </Col>
      <Col id="right-top-col-2-nav-menu">
        <div id="breadcrumbs-container">
          <Breadcrumbs separator=">" aria-label="breadcrumb" id="breadcrumbs">
            <a href="#" color="inherit" href="/">
              Files
            </a>
            <a href="#" color="inherit" href="/getting-started/installation/">
              UI/UX First Course
            </a>
            <a href="#" color="inherit" href="/getting-started/installation/">
              1st edu week
            </a>
          </Breadcrumbs>
        </div>
      </Col>
      <Col id="right-top-col-3-items-text">
        <div id="total-items-text-container" className="right-top-itemTextAndFilterFeaturesMargin">Items: 6.5 GB</div>
      </Col>
      <Col id="right-top-col-4-date-uploaded-dropdown">
        <div id="date-uploaded-dropdown-container">
          <Dropdown id="date-uploaded-dropdown">
            <Dropdown.Toggle variant="success" className="dropdown-basic" style={{ backgroundColor: 'white', color: 'grey', border: '0' }}>
              Date Uploaded
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>            
        </div>
      </Col>
      <Col id="right-top-col-5-filter-features">
        <div className="right-top-itemTextAndFilterFeaturesMargin">
          <i className="fas fa-th fa-md right-section-top-icon-styles cursor-pointer" id="right-section-top-gallery-icon" />
          <i className="fas fa-ellipsis-h fa-md right-section-top-icon-styles right-section-top-icon-margin cursor-pointer" />
          <i className="fas fa-search fa-md right-section-top-icon-styles right-section-top-icon-margin cursor-pointer" />
        </div>
      </Col>
      <Col id="right-top-col-6-upload-btn">
        <Button variant="primary" id="right-sec-extreme-right-btn">Upload</Button>
      </Col>

    </Row>
  );
};

export default RightTop;