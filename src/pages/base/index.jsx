import React, { Component } from 'react'
import Menu from '@/pages/menu' 
import { renderRoutes } from 'react-router-config'

import './style.less'
export default class extends Component {
  render() {
    return (
      <div className="pages_base">
        <div className="pages_base_left">
          <Menu />
        </div>
        <div className="pages_base_right">
         
          {renderRoutes(this.props.route.routes)}
        </div>
        
        
      </div>
    )
  }
}
