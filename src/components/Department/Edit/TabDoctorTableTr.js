/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component } from 'react';

export default class TabDoctorTableTr extends Component {

  render() {
    return (
      <tr>
        <td className="collapsing">
          <div className="ui fitted checkbox">
            <input type="checkbox" tabIndex="0" className="hidden" />
          </div>
        </td>
        <td rowSpan="3">组长甲</td>
        <td>组长甲</td>
        <td></td>
        <td></td>
        <td>18200000001</td>
        <td className="center aligned">
          未发送 (<a href="#">发送</a>)
        </td>
      </tr>
    );
  }
}
