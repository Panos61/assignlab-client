import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  const pathname = window.location.pathname;

  const path = pathname === '/' ? 'welcome' : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu pointing secondary size='large' color='violet'>
      <Menu.Item
        name='welcome'
        active={activeItem === 'welcome'}
        onClick={handleItemClick}
        as={Link}
        to='/'
      />
      <Menu.Item
        name='dashboard'
        active={activeItem === 'dashboard'}
        onClick={handleItemClick}
        as={Link}
        to='/dashboard'
      />

      <Menu.Menu position='right'>
        <Menu.Item
          name='login'
          active={activeItem === 'login'}
          onClick={handleItemClick}
          as={Link}
          to='/login'
        />
        <Menu.Item
          name='register'
          active={activeItem === 'register'}
          onClick={handleItemClick}
          as={Link}
          to='/register'
        />
      </Menu.Menu>
    </Menu>
  );
};

export default MenuBar;
