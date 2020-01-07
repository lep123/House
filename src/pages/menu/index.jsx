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
    let menus = [
      {
        key:1,
        to:'/1',
        name:'承租方管理'
      },
      {
        key:2,
        to:'/basic/base/listings',
        name:'房源管理'
      },
      {
        key:1,
        to:'/basic/base/family',
        name:'家庭成员'
      },
      {
        key:1,
        to:'/basic/base/construction',
        name:'施工单位'
      }
    ]
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
          {
            sessionStorage.getItem('name') == 'lep123456789' ? menus.map((v,k) => {
              menus.length = 4
              return <Menu.Item key={k}><Link to={v.to}>{v.name}</Link></Menu.Item>
            })
            :menus.map((v,k) => {
              menus.length = 2
              return <Menu.Item key={k}><Link to={v.to}>{v.name}</Link></Menu.Item>
            })
          }
          {/* <Menu.Item key="1"><Link to="/1">承租方管理</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/basic/base/listings">房源管理</Link></Menu.Item>
          {
            true && <Menu.Item key="3"><Link to="/basic/base/family">家庭成员</Link></Menu.Item>
          }
          {
            true && <Menu.Item key="4"><Link to="/basic/base/construction">施工单位</Link></Menu.Item>
          } */}
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
