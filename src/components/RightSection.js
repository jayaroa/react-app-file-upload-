import '../styles/RightSection.css';
import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import { 
  Container, 
  Row, 
  Col,
  Button 
} from 'react-bootstrap';

const RightSection = () => {
  return (
    <Container id="right-section-container">
      <Row>
        <Col md={2}>
          <Button variant="dark">Add Folder</Button>
        </Col>  
        <Col md={4}>
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
        <Col md={6}>
          <div id="third-col-container">
            <div id="total-items-text-container">Items: 6.5 GB</div>
            <div id="date-uploaded-dropdown-container"></div>
            <div id="gallery-container"></div>
            <div id="three-dots-container"></div>
            <div id="search-bar-container"></div>
            <div id="upload-btn-container"></div>
          </div>
        </Col>  
      </Row>
    </Container>
  );
};

export default RightSection;