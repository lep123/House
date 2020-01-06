import React, { Component } from 'react'
import { Table } from 'antd'
import axios from 'axios'
export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
          data: []
        }
        axios.get('index.json')
          .then(res => this.setState({data:res.data.data[0].data[0].data}))
      }
    less = (text) => {
        let color
        if(text[1] == '已租聘') {
          color="red"
        }else if(text[1] == '已配租') {
          color="blue"
        }else if(text[1] == '欠费') {
          color="greenyellow"
        }else if(text[1] == '腾退待租') {
          color="purple"
        }else if(text[1] == '建成待租') {
          color="brown"
        }else if(text[1] == '在建') {
          color="green"
        }else {
          color="purple"
        }
        return <span style={{background:color}}><a href="#">{text[0]}</a></span>
      }
  render() {
    const one = this.state
    const columns1 = [
        {
          title: '单元',
          dataIndex: 'key',
          key: 'unit',
          render: text => <a>{text}层</a>,
        },
        {
          title: '',
          dataIndex: 'unit1',
          key: 'unit1',
          render:text=>{return this.less(text)}
        },
        {
          title: '1单元',
          dataIndex: 'unit2',
          key: 'unit2',
          render:text=>{return this.less(text)}
        },
        {
          title: '',
          dataIndex: 'unit3',
          key: 'unit3',
          render:text=>{return this.less(text)}
        },
        {
          title: '',
          dataIndex: 'unit4',
          key: 'unit4',
          render:text=>{return this.less(text)}
        },
        {
          title: '2单元',
          dataIndex: 'unit5',
          key: 'unit5',
          render:text=>{return this.less(text)}
        },
        {
          title: '',
          dataIndex: 'unit6',
          key: 'unit6',
          render:text=>{return this.less(text)}
        },
        {
          title: '',
          dataIndex: 'unit7',
          key: 'unit7',
          render:text=>{return this.less(text)}
        },
        {
          title: '3单元',
          dataIndex: 'unit8',
          key: 'unit8',
          render:text=>{return this.less(text)}
        },
        {
          title: '',
          dataIndex: 'unit9',
          key: 'unit9',
          render:text=>{return this.less(text)}
        }
      ];

    return (
      <>
        {
            one.data.length > 0 ? 
            <Table columns={columns1} dataSource={one.data[0].one} pagination={false} />
            :null
        }
      </>
    )
  }
}
