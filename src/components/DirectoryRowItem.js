import '../styles/DirectoryRowItem.css';
import React from 'react';
import { 
  Container, 
  Row, 
  Col,
  Form
} from 'react-bootstrap';
import DirectoryDetailSection from './DirectoryDetailSection';
import DateAdded from './DateAdded';
import LastModified from './LastModified';
import HorizontalLine from './HorizontalLine';
import DirectoryRowItemInfo from './DirectoryRowItemInfo';
import Checkbox from './Checkbox';

class DirectoryRowItem extends React.Component {
  renderDirectoryRowInfo = (value, lastModified, seen) => {
    return value || (lastModified === 'Done') ? <DirectoryRowItemInfo lastModified={lastModified} seen={seen} /> : null;
  };

  render() {
    return (
      <Row className="directory-row-item-container">
        <Col className="directory-row-item-col-1-checkboxAndFolder" style={{ padding: 0, margin: 0 }}>
            <Row>
              <Col style={{ padding: 0 }}>
                <Checkbox />                          
              </Col>
              <Col>
                <div>
                  <img src="images/folder-icon-png.png" alt="folder icon" style={{ marginLeft: '-34px', padding: 0, width: '110%', height: '43px' }} />
                </div>
              </Col>
            </Row>
        </Col>
        <Col className="directory-row-item-col-2-name-area">
          <DirectoryDetailSection title={this.props.title} />
        </Col>
        <Col className="directory-row-item-col-3-date-added">
          <DateAdded dateAdded={this.props.dateAdded} />
        </Col>
        <Col className="directory-row-item-col-4-last-modified">
          <LastModified lastModified={this.props.lastModified} />
        </Col>
        <Col className="directory-row-item-col-5-info">
          {this.renderDirectoryRowInfo(this.props.directoryRowInfo, this.props.lastModified, this.props.seen)}
        </Col>
      </Row>
    );
  }
}



export default DirectoryRowItem;