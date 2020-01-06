import React from 'react'
import { Breadcrumb, Icon } from 'antd'

export default class extends React.PureComponent {
  render () {
    const { navName } = this.props
    return (
      <div className="com_crumbs_box">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            当前位置:系统
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            {navName}
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    )
  }
}