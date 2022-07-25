import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css';

const Sidebar = () => {
  return (
    <Menu>
      {renderSidebarItem('Home', '/')}
      {renderSidebarItem('Gnutella Network', '/gnutella')}
      {renderSidebarItem('E7 Auto Shop', '/e7-auto-shop')}
      {renderSidebarItem('Discord Bot', '/berry-bot')}
      {renderSidebarItem('Website', '/website')}
      {renderSidebarItem('Azul AI', '/azulAI')}
    </Menu>
  );
};

function renderSidebarItem(title, link) {
  return <a className="menu-item" href={link}>{title}</a>
}

export default Sidebar;