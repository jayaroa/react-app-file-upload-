import '../styles/DirectoryRowItemInfo.css';
import React from 'react';
import DirectoryRowItemIcons from './DirectoryRowItemIcons';
import DirectoryRowItemDoneIcons from './DirectoryRowItemDoneIcons';

class DirectoryRowItemInfo extends React.Component {
  renderInfo(lastModified, seen) {
    if(lastModified === 'Done') {
      return <DirectoryRowItemDoneIcons seen={seen} />
    } else {
      return <DirectoryRowItemIcons />;
    }
  }
  render() {
    return (
      <div>
        {this.renderInfo(this.props.lastModified, this.props.seen)}
      </div>
    );
  }
}

export default DirectoryRowItemInfo;