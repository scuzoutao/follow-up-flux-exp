/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component } from 'react';

import * as DepartmentActionCreators from '../../../actions/Department/DepartmentActionCreators';

import TabDoctorTableTr from './TabDoctorTableTr'
import TabDoctorTableTrNew from './TabDoctorTableTrNew'
import TabDoctorTableTfoot from './TabDoctorTableTfoot'

export default class TabDoctorTable extends Component {

  _onAddNew() {
    DepartmentActionCreators.addNewDoctor();
  }

  render() {

    const { doctors } = this.props;
    const leaders = [];

    return (
      <table className="ui small unstackable selectable celled striped definition table" id="doctors_table">
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
          {doctors.map(function(member){
            if (member.status){
              if (member.count)
                leaders.push(member)
              return <TabDoctorTableTr key={member.id} doctor={member} />
            }
            else
              return <TabDoctorTableTrNew key={member.id} leaders={leaders}/>
          })}
        </tbody>
        <TabDoctorTableTfoot onAddNew={this._onAddNew}/>
      </table>
    );
  }
}
