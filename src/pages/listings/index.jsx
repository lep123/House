import React, { Component } from 'react'
import Crumbs from '@@/Crumbs'
import './style.less'
export default class extends Component {
  render() {
    return (
      <div className="listings">
        <Crumbs navName="房源管理"/>
      </div>
    )
  }
}
