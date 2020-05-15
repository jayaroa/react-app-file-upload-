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
        <Col className="files-dropdown-container">
          <Dropdown id="asas">
            <Dropdown.Toggle variant="success" id="dropdown-basic" >
              Files
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col id="folder-plus-container">
          <div id="folder-plus-icon-container">
            <i class="fas fa-plus fa-md" style={{ cursor: 'pointer' }}></i>
          </div>
        </Col>
      </Row>
      <Row>
        <Col id="sidebar-list-items-container">
          <ul className="sidebar-list-items">
            <SidebarItems items={['Inbox', 'Sketching']} />
          </ul>

          <div id="sidebar-text-heading">UI/UX First Course</div>
          
          <ul className="sidebar-list-items">
            <SidebarItems items={['Introducing to CSS...', 'Introducing to HTM...']} />
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