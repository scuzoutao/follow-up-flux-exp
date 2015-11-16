/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component } from 'react';

export default class TabDoctorTableTrNew extends Component {

  render() {

    return (
      <tr className="positive">
        <td></td>
        <td className="five width">
          <div className="ui search tiny fluid selection dropdown">
            <select>
              <option value="">小组</option>
              <option value="0">*新组长</option>
              <option value="2">组长甲</option>
              <option value="5">组长乙</option>
            </select>
          </div>
        </td>
        <td>
          <div className="ui fluid tiny input">
            <input placeholder="姓名" />
          </div>
        </td>
        <td>
          <div className="ui fluid tiny input">
            <input placeholder="亚专业" />
          </div>
        </td>
        <td>
          <div className="ui fluid tiny input">
            <input placeholder="职称" />
          </div>
        </td>
        <td>
          <div className="ui fluid tiny input">
            <input placeholder="手机号" />
          </div>
        </td>
        <td className="center aligned">
          未保存
        </td>
      </tr>
    )
  }
}
