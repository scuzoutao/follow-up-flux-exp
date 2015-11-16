/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component } from 'react';

import TabDoctorTableTr from './TabDoctorTableTr'
import TabDoctorTableTfoot from './TabDoctorTableTfoot'

function onAddNew() {

}

export default class TabDoctorTable extends Component {

  componentDidMount() {
    $('.ui.checkbox').checkbox();
  }

  render() {

    const { doctors } = this.props;

    return (
      <table className="ui compact unstackable selectable celled striped definition table" id="doctors_table">
        <thead className="full-width">
          <tr>
            <th></th>
            <th width="120px">小组</th>
            <th width="120px">姓名</th>
            <th width="160px">亚专业</th>
            <th width="140px">职称</th>
            <th width="140px">手机号</th>
            <th className="center aligned">状态</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map(function(doctor){
            return <TabDoctorTableTr key={doctor.id} doctor={doctor}/>;
          })}
        </tbody>
        <TabDoctorTableTfoot />
      </table>
    );
  }
}
