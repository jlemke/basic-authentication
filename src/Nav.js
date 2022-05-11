import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { 
  HomeOutlined, 
  ProfileOutlined, 
  FileProtectOutlined,
  GlobalOutlined
} from '@ant-design/icons';


const Nav = () => {

  const location = useLocation();
  const splitLocation = location.pathname.split('/');
  const key = splitLocation[1] && splitLocation[1].length > 0 
    ? splitLocation[1]
    : 'home';

  return (
    <div>
      <Menu 
        selectedKeys={[key]} 
        mode="horizontal"
      >
        <Menu.Item 
          key='home'
        >
          <Link 
            to={'/'}
          >
            <HomeOutlined />
            Home
          </Link>
        </Menu.Item>
        <Menu.Item 
          key='profile'
        >
          <Link 
            to='/profile'
          >
          <ProfileOutlined />
          Profile
          </Link>
        </Menu.Item>
        <Menu.Item 
          key='protected'
        >
          <Link 
            to='/protected'
          >
            <FileProtectOutlined />
            Protected
          </Link>
        </Menu.Item>
        <Menu.Item
          key='more-public'
        >
          <Link
            to='/more-public'
          >
            <GlobalOutlined />
            More Public
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Nav;