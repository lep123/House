import React, { Component } from 'react'
import Crumbs from '@@/Crumbs'
import './style.less'
import { connect } from 'react-redux'
import { home } from '@/actions/home'
import { Table, Divider } from 'antd';
const { Column } = Table;

const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];



export default @connect(state => ({
    data:state.index.data
}), {
  setData: home.setData
})class extends Component {
   constructor(props){
     super(props)
     this.props.setData({page:1,limit:20})

     console.log(this.props.data,'+++++++++')
   }
  render() {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
    };
    return (
      <div className="listings">
          <div className="listings-header">
              <Crumbs navName="房源管理"/>
          </div>
        <Table dataSource={data} rowSelection={rowSelection} className="listings-tables">
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
          <Column title="Age" dataIndex="age" key="age" />
          <Column title="Address" dataIndex="address" key="address" />
          
          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <span>
                <a>编辑</a>
                <Divider type="vertical" />
                <a>删除</a>
              </span>
            )}
          />
        </Table>
      </div>
    )
  }
}
