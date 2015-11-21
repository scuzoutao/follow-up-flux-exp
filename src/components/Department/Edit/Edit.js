/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';

import * as DepartmentActionCreators from '../../../actions/Department/DepartmentActionCreators';
import DoctorStore from '../../../stores/Department/DoctorStore';
import connectToStores from '../../../decorators/connectToStores';

import Head from './Head'
import Tab from './Tab'
import TabBasic from './TabBasic'
import TabDoctor from './TabDoctor'
import TabAdmin from './TabAdmin'

function parseId(params) {
  return parseInt(params.id);
}

function requestData(props) {
  const { params } = props;
  const DepartmentId = parseId(params);
  DepartmentActionCreators.requestDoctors(DepartmentId);
}

function getState(props) {
  const id = parseId(props.params);
  const doctors = DoctorStore.getDocotors();
  const leaders = DoctorStore.getLeaders();
  return { doctors, leaders };
}

@connectToStores([DoctorStore], getState)
export default class Edit extends Component {

  static propTypes = {
    doctors: PropTypes.array,
  };

  static defaultProps = {
    doctors: [],
    leaders: [],
    onSave: this._onSave
  };

  componentWillMount() {
    requestData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id !== this.props.params.id) {
      requestData(nextProps);
    }
  }

  render() {

    const { department } = this.props;
    var title = '编辑: ' + department.name;

    return (
      <DocumentTitle title={title}>
        <div className="component edit">
          <div className="wrap">
            <div className="ui page grid">
              <div className="sixteen wide column">
                <Head {...this.props} onSave={this._onSave.bind(this)}/>
                <Tab />
                <TabBasic />
                <TabDoctor {...this.props}/>
                <TabAdmin />
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }

  _onSave() {
    var department_id = this.props.department.id;
    var tab = window.location.hash.substr(2)
    if (tab == 'basic') {

    } else if (tab == 'doctor') {
      let new_doctors_array = [];
      $('tr.positive').each((i, n) => {
        let new_doctor = {
          leader: parseInt($(n).find('select').val()),
          department_id: department_id,
          status: 'new'
        };
        $(n).find('input').each((j, k) => {
          if ($(k).attr('data-field')) {
            new_doctor[$(k).attr('data-field')] = k.value;
          }
        })
        new_doctors_array.push(new_doctor);
      })
      if (new_doctors_array.length > 0) {
        DepartmentActionCreators.saveNewDoctors(department_id, {id: department_id, users: new_doctors_array});
      }
    }
  }

}
