import '../styles/TopSecondRow.css';
import React from 'react';
import { 
  Container, 
  Row, 
  Col,
  Form
} from 'react-bootstrap';
import Checkbox from './Checkbox';

const TopSecondRow = () => {
  return (
    <Container id="top-second-row-container">
        <Row>
          <Col className="directory-row-item-col-1-checkboxAndFolder" style={{ padding: 0, margin: 0 }}>
            <div style={{ marginLeft: '-14px' }} >
              <Checkbox />
            </div>
          </Col>
          <Col className="directory-row-item-col-2-name-area">
            <div className="right-sect-top-sec-row-text">NAME</div>
          </Col>
          <Col className="directory-row-item-col-3-date-added">
            <div className="right-sect-top-sec-row-text">DATE ADDED</div>
          </Col>
          <Col className="directory-row-item-col-4-last-modified">
            <div className="right-sect-top-sec-row-text">LAST MODIFIED</div>
          </Col>
          <Col className="directory-row-item-col-5-info"></Col>
        </Row>
    </Container>
  );
};

export default TopSecondRow;