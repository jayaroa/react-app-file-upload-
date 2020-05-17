import '../styles/DirectoryRowItemDoneIcons.css';
import React from 'react';

const DirectoryRowItemDoneIcons = (props) => {
  return (
    <div className="directory-row-item-done-icons-container">
      <span className="directory-row-item-comment-icon-container">
        <i className="fas fa-comment cursor-pointer" />
        <span> -</span>
      </span>          
      <span className="directory-row-item-eye-icon-container">
        <i className="fas fa-eye cursor-pointer" />
        <span> {props.seen}</span>
      </span>          
    </div>
  );
};

export default DirectoryRowItemDoneIcons;