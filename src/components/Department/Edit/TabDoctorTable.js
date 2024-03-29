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

  constructor(props) {
    super(props);
    this._onRemove = this._onRemove.bind(this);
  }

  render() {
    const { doctors, leaders } = this.props;

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
          {
            doctors.map(function(member){
              let doctor_tr;
              if (member.status!='new') {
                doctor_tr = <TabDoctorTableTr key={member.id} doctor={member} />
              } else {
                doctor_tr = <TabDoctorTableTrNew key={member.id} leaders={leaders} doctor={member} />
              }
              return doctor_tr;
            })
          }
        </tbody>
        <TabDoctorTableTfoot onAddNew={this._onAddNew} onRemove={this._onRemove}/>
      </table>
    );
  }

  _onAddNew() {
    DepartmentActionCreators.addNewDoctor();
  }

  _onRemove() {
    let department_id = this.props.department.id;
    let remove_doctors_array = [];
    $('#doctors_table tr.data-tr').each((i, tr) => {
      let checkbox = $(tr).find('.checkbox')
      if(checkbox.attr('class').indexOf("checked") > -1) {
        let checked_id = parseInt(checkbox.find('input').attr('data-id'));
        remove_doctors_array.push(checked_id);
      }
    });
    DepartmentActionCreators.removeDoctors(department_id, {id: department_id, users: remove_doctors_array});
  }

}
