import React from 'react';

const DirectoryRowItemIcons = () => {
  return (
    <div className="directory-row-item-info-container">
      <span>
        <a href="#" title="Activity log"><i className="fas fa-chart-line fa-md cursor-pointer" /></a>
      </span>
      <span className="directory-row-item-info-icons">
        <i className="fas fa-exclamation-triangle fa-md cursor-pointer" />
      </span>
      <span className="directory-row-item-info-icons">
        <i className="fas fa-cog fa-md cursor-pointer" />
      </span>
      <span className="directory-row-item-info-cross">
        <i className="fas fa-times-circle fa-md cursor-pointer" />
      </span>
    </div>
  );
};

export default DirectoryRowItemIcons;