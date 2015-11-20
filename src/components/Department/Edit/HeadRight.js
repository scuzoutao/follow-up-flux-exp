/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HeadRight extends Component {

  render() {
    return (
      <div className="float-right column">
        <div className="ui primary small button" onClick={this.props.onSave}>
          <i className="save icon"></i>
          保存
        </div>
        <div className="ui red small button">
          <i className="trash icon"></i>
          删除
        </div>
        <Link className="ui small button" to="/departments/15">取消</Link>
      </div>
    );
  }

}
