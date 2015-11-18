/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component } from 'react';

export default class TabDoctorTableTr extends Component {

  render() {

    const { doctor } = this.props;

    return (
      <tr>
        <td className="collapsing">
          <div className="ui fitted checkbox">
            <input type="checkbox"/>
          </div>
        </td>
        <td rowSpan="0">{doctor.name}</td>
        <td>{doctor.name}</td>
        <td>{doctor.sub}</td>
        <td>{doctor.title}</td>
        <td>{doctor.mobile}</td>
        <td className="center aligned">
          未发送 (<a href="#">发送</a>)
        </td>
      </tr>
    )
  }
}
