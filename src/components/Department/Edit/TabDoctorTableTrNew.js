/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component, PropTypes } from 'react';

export default class TabDoctorTableTrNew extends Component {

  componentDidMount() {
    $('select').dropdown();
  }

  render() {

    const { leaders, doctor } = this.props;

    return (
      <tr className="positive">
        <td></td>
        <td className="five width">
          <select className="ui search tiny fluid">
            <option value="">小组</option>
            <option value="0">*新组长</option>
            {leaders.map(function(leader){
              return <option value={leader.id}>{leader.name}</option>
            })}
          </select>
        </td>
        <td>
          <div className="ui fluid tiny input">
            <input placeholder="姓名" value={doctor.name} data-field="name"/>
          </div>
        </td>
        <td>
          <div className="ui fluid tiny input">
            <input placeholder="亚专业" value={doctor.sub} data-field="sub"/>
          </div>
        </td>
        <td>
          <div className="ui fluid tiny input">
            <input placeholder="职称" value={doctor.title} data-field="title"/>
          </div>
        </td>
        <td>
          <div className="ui fluid tiny input">
            <input placeholder="手机号" value={doctor.mobile} data-field="mobile"/>
          </div>
        </td>
        <td className="center aligned">
          未保存
        </td>
      </tr>
    )
  }

}
