import React from 'react'
import { Breadcrumb, Icon } from 'antd'

export default class extends React.PureComponent {
  state = {
    data: '房源管理'
  }
  render () {
    return (
      <div className="com_crumbs_box">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            当前位置:系统
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            { this.state.data}
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    )
  }
}