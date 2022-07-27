import {
  Menu
} from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';

const Header = () => {
  const [current, setCurrent] = useState('mail');
  const history = useHistory()

  const onClick = (e) => {
    setCurrent(e.key);
    history.push({
      pathname: e.key
    })
  };

  return (
    <Wrapper>
      <h1 class="logo">FNOVATECH</h1>
      <Menu className='menu-container' onClick={onClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key='/home'>Home</Menu.Item>
        <Menu.Item key='/contact'>Contact Us</Menu.Item>
        <Menu.Item key='/residential'>Residential</Menu.Item>
        <Menu.Item key='/commercial'>Commercial</Menu.Item>
        <Menu.Item key='/about'>About Us</Menu.Item>
        <Menu.Item key='/installation'>Solar Installation</Menu.Item>
      </Menu>
    </Wrapper>
  )
};
const Wrapper = styled.div`
  .menu-container {
    width: 100%;
    font-size: 24px;
  }
  .logo {
    font-size: 36px;
    font-weight: 700;
    color: #1890ff;
  }
`
export default Header;