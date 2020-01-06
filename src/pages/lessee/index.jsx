import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import './style.less'
const { SubMenu } = Menu
export default class extends Component {
  handleClick = e => {
    console.log('click ', e);
  };
  render() {
    return (
      <div className="lessee">
        <div className="head">
          当前位置
        </div>
        <div className="info">
          <Menu
            onClick={this.handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            className="menu"
            mode="inline"
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="mail" />
                  <span>瑞景河畔</span>
                </span>
              }
            >
              <Menu.Item key="1"><Icon type="caret-down" />瑞景河畔16号楼</Menu.Item>
              <Menu.Item key="2"><Icon type="caret-down" />瑞景河畔17号楼</Menu.Item>
              <Menu.Item key="3"><Icon type="caret-down" />瑞景河畔19号楼</Menu.Item>
              <Menu.Item key="4"><Icon type="caret-down" />瑞景河畔20号楼</Menu.Item>
              <Menu.Item key="5"><Icon type="caret-down" />瑞景河畔22号楼</Menu.Item>
              <Menu.Item key="6"><Icon type="caret-down" />瑞景河畔23号楼</Menu.Item>
              <Menu.Item key="7"><Icon type="caret-down" />瑞景河畔24号楼</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="appstore" />
                  <span>蔚蓝小区</span>
                </span>
              }
            >
              <Menu.Item key="8"><Icon type="caret-down" />蔚蓝小区8号楼</Menu.Item>
              <Menu.Item key="9"><Icon type="caret-down" />蔚蓝小区9号楼</Menu.Item>
              <Menu.Item key="10"><Icon type="caret-down" />蔚蓝小区10号楼</Menu.Item>
              <Menu.Item key="11"><Icon type="caret-down" />蔚蓝小区11号楼</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <Icon type="setting" />
                  <span>和盛园</span>
                </span>
              }
            >
              <Menu.Item key="12"><Icon type="caret-down" />和盛园112号楼</Menu.Item>
              <Menu.Item key="13"><Icon type="caret-down" />和盛园112号楼</Menu.Item>
            </SubMenu>
          </Menu>
        </div>

      </div>
    )
  }
}
