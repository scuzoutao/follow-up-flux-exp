/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component } from 'react';

export default class TabDoctorTableTfoot extends Component {

  render() {
    return (
      <tfoot className="full-width">
        <tr>
          <th colSpan="8">
            <div className="ui small red basic button" onClick={this.props.onRemove}>
              <i className="remove icon"></i>
              移除选中
            </div>
            <div className="ui right floated small green basic button" onClick={this.props.onAddNew}>
              <i className="chevron down icon"></i>
              新增一行
            </div>
          </th>
        </tr>
      </tfoot>
    );
  }
}
