import React, { Component } from 'react'
import './style.less'
export default class extends Component {
    state = {
        datastate:['已租赁','已配租','欠费','腾退待租','建成待租','再建','其他']
      }
  render() {
      const { datastate } = this.state
    return (
      <div className="stataname">
          <p>瑞景河畔16号楼：</p>
          <span className="statenamelease">{datastate[0]}</span>
          <span className="statenamesublet">{datastate[1]}</span>
          <span className="statenamefess">{datastate[2]}</span>
          <span className="statenameto">{datastate[3]}</span>
          <span className="statenamebuilt">{datastate[4]}</span>
          <span className="statenamebuildings">{datastate[5]}</span>
          <span className="statenameother">{datastate[6]}</span>
      </div>
    )
  }
}
