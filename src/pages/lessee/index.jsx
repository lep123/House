import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import State from '@/pages/state'
import { renderRoutes } from 'react-router-config'
import './style.less'
import axios from 'axios'
import {
  Link
} from "react-router-dom";
const { SubMenu } = Menu
export default class extends Component {
  handleClick = e => {
    console.log('click ', e);
  };
  
  
  render() {
    return (
      <div className="lessee">
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
              <Menu.Item key="1"><Link to="/1"><Icon type="caret-down" />瑞景河畔16号楼</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/2"><Icon type="caret-down" />瑞景河畔17号楼</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/3"><Icon type="caret-down" />瑞景河畔19号楼</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/4"><Icon type="caret-down" />瑞景河畔20号楼</Link></Menu.Item>
              <Menu.Item key="5"><Link to="/5"><Icon type="caret-down" />瑞景河畔22号楼</Link></Menu.Item>
              <Menu.Item key="6"><Link to="/6"><Icon type="caret-down" />瑞景河畔24号楼</Link></Menu.Item>
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
              <Menu.Item key="8"><Link to="/7"><Icon type="caret-down" />蔚蓝小区9号楼</Link></Menu.Item>
              <Menu.Item key="9"><Link to="/8"><Icon type="caret-down" />蔚蓝小区10号楼</Link></Menu.Item>
              <Menu.Item key="10"><Link to="/9"><Icon type="caret-down" />蔚蓝小区11号楼</Link></Menu.Item>
              <Menu.Item key="11"><Link to="/10"><Icon type="caret-down" />蔚蓝小区12号楼</Link></Menu.Item>
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
              <Menu.Item key="12"><Link to="/12"><Icon type="caret-down" />和盛园112号楼</Link></Menu.Item>
              <Menu.Item key="13"><Link to="/13"><Icon type="caret-down" />和盛园113号楼</Link></Menu.Item>
            </SubMenu>
          </Menu>
          <div className="lessee-table">
            <div className="state">
              
              <State />
            </div>
            <div className="lessee-tables">
              {renderRoutes(this.props.route.routes)}
            </div>
          </div>

      </div>
    )
  }
}
