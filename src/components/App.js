import '../styles/App.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import RightSection from './RightSection';

const App = () => {
  return (
    <div>
      <Container fluid>
        <Row id="app-top-bar">
          <Col className="app-name-margin-col-1" id="app-logo-container">
            <a href="/"><i class="fas fa-file-powerpoint fa-lg" /></a>
          </Col>
          <Col className="app-name-col-2-container">
            <div id="app-name"><a href="/">Platform</a></div>
          </Col>
        </Row>
        <Row>
          <Col className="app-first-col"></Col>
          <Col className="app-second-col sidebar-col" style={{ padding: 0 }}>
            <Sidebar />
          </Col>
          <Col className="app-third-col">
            <RightSection style={{ marginTop: '10px' }} />  
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;