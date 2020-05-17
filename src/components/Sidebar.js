import '@fortawesome/fontawesome-free/css/all.css';
import '../styles/Sidebar.css';
import { ReactComponent as Logo } from 'bootstrap-icons/icons/folder-plus.svg';
import React from 'react';
import { 
  Container, 
  Row, 
  Col,
  DropdownButton,
  Dropdown  
} from 'react-bootstrap';
import SidebarItems from './SidebarItems';

const Sidebar = () => {
  return (
    <Container>
      <Row>
        <Col className="sidebar-col-1-stack-icon">
          <img src="./images/stack-icon-png.png" alt="stack icon" id="sidebar-stack-icon-img" />
        </Col>
        <Col className="sidebar-col-2-files-dropdown files-dropdown-container">
        <Dropdown>
            <Dropdown.Toggle variant="success" className="dropdown-basic" >
              <span style={{ marginLeft: '-50px' }}>Files</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col className="sidebar-col-3-folder-plus-icon" id="folder-plus-icon-container">
          <div id="folder-plus-icon-container">
            <i className="fas fa-plus-square fa-lg cursor-pointer" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col id="sidebar-list-items-container" style={{ margin: 0, padding: 0 }}>
          <ul className="sidebar-list-items">
            <SidebarItems items={[
                'Inbox', 
                'Sketching', 
                'Introducing to CSS...', 
                'Introducing to HTM...'
              ]} 
            />
          </ul>

          <div id="sidebar-show-all-text-container">
            <a href="#">Show All...</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;