import '../styles/App.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import RightSection from './RightSection';

const App = () => {
  return (
    <Container fluid>
      <Row style={{ height: '100vh' }}>
        <Col md={2} className="sidebar-col">
          <Sidebar />
        </Col>
        <Col>
          <RightSection />  
        </Col>
      </Row>
    </Container>
  );
};

export default App;