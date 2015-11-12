/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component } from 'react';

export default class Tab extends Component {

  componentDidMount() {
    $('.tabular.menu .item').tab({history: true});
  }

  render() {
    return (
      <div className="ui tabular menu">
        <a className="active item" data-tab="basic">基本资料</a>
        <a className="item" data-tab="doctor">医生管理</a>
        <a className="item" data-tab="admin">管理员</a>
      </div>
    );
  }

}
