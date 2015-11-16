/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component, PropTypes } from 'react';

import * as DepartmentActionCreators from '../../actions/Department/DepartmentActionCreators';
import DepartmentStore from '../../stores/Department/DepartmentStore';
import DoctorStore from '../../stores/Department/DoctorStore';
import connectToStores from '../../decorators/connectToStores';

import Header from '../Layouts/Header';
import Navigation from '../Layouts/Navigation';
require('./Department.scss')

function parseId(params) {
  return parseInt(params.id);
}

function requestData(props) {
  const { params } = props;
  const DepartmentId = parseId(params);
  DepartmentActionCreators.requestDepartment(DepartmentId);
  DepartmentActionCreators.requestDoctors(DepartmentId);
}

function getState(props) {
  const id = parseId(props.params);
  const department = DepartmentStore.get();
  const doctors = DoctorStore.get();
  if (id !== department.id) {
    return {};
  }
  return { department, doctors };
}

@connectToStores([DepartmentStore, DoctorStore], getState)
export default class Department extends Component {

  static propTypes = {
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired,

    department: PropTypes.object,
    doctors: PropTypes.array
  };

  static defaultProps = {
    department: {id: 0, name: '加载中...', description: '加载中...'},
    doctors: []
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
    return (
      <div className="component department">
        <Header />
        <Navigation />
        { React.cloneElement(this.props.children, {
          department: this.props.department,
          doctors: this.props.doctors
        }) }
      </div>
    );
  }

}
