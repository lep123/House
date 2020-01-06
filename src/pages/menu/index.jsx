import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './style.less'
const { SubMenu } = Menu;
export default class extends Component {
  handleClick = e => {
    console.log('click ', e);
  }
  
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        className="menu"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="appstore" />
              <span>基础数据</span>
            </span>
          }
        >
          <Menu.Item key="1"><Link to="/1">承租方管理</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/basic/base/listings">房源管理</Link></Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="setting" />
              <span>摇号配租</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}
