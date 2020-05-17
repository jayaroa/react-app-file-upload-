import '../styles/DirectoryDetailSection.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import VideoQty from './VideoQty';

const DirectoryDetailSection = (props) => {
  return (
    <Container>
      <Row>
        <div><b>{props.title}</b></div>
      </Row>    
      <Row style={{ position: 'relative' }}>
        <Col sm={4} style={{ padding: 0 }}>
          <div>
            <span className="directory-detail-btm-text text-colorizer">UX/UI Design</span>
          </div>
        </Col>
        <Col sm={8} style={{ padding: 0 }}>
          <VideoQty qty="128" />
        </Col>
      </Row>    
    </Container>
  );
};

export default DirectoryDetailSection;