import React from 'react';

const SidebarItems = (props) => {
  return props.items.map(item => {
    return <a href="#"><li>{item}</li></a>;
  });
};

export default SidebarItems;