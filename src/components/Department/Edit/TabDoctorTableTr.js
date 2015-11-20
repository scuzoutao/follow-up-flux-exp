/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component } from 'react';

export default class TabDoctorTableTr extends Component {

  componentDidMount() {
    $('.ui.checkbox').checkbox();
  }

  render() {

    const { doctor } = this.props;
    if (doctor.count) {
      var leader = <td rowSpan={doctor.count+1}>{doctor.name}</td>
    }
    var status = '';
    switch (doctor.status) {
      case 'unconfirmed':
        status = '未确认';
        break;
      case 'pending':
        status = '未发送';
        break;
      case 'confirmed':
        status = '已确认';
        break;
      default:
        status = '未知';
    }

    return (
      <tr>
        <td className="collapsing">
          <div className="ui fitted checkbox">
            <input type="checkbox"/>
          </div>
        </td>
        {leader}
        <td>{doctor.name}</td>
        <td>{doctor.sub}</td>
        <td>{doctor.title}</td>
        <td>{doctor.mobile}</td>
        <td className="center aligned">
          {status}
        </td>
      </tr>
    )
  }
}
