import React from 'react';

const SidebarItems = (props) => {
  return props.items.map(item => {
    return <li><a href="#">{item}</a></li>;
  });
};

export default SidebarItems;