import '../styles/RightSection.css';
import React from 'react';
import { 
  Container, Row, Col
} from 'react-bootstrap';
import RightTop from './RightTop';
import HorizontalLine from './HorizontalLine';
import TopSecondRow from './TopSecondRow';
import DirectorySection from './DirectorySection';
import FileUploader from './FileUploader';

const RightSection = () => {
  return (
    
    <div id="right-section-container">
      <RightTop />
      <HorizontalLine />
      <TopSecondRow />
      <HorizontalLine />
      <DirectorySection />
      <Row>
        <Col>
          <FileUploader />
        </Col>
      </Row>

    </div>
  );
};

export default RightSection;