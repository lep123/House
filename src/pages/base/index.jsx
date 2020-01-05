import React, { Component } from 'react'
import Menu from '@/pages/menu' 
import { renderRoutes } from 'react-router-config'
import './style.less'
export default class extends Component {
  render() {
    return (
      <div className="base">
        <Menu />
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}
