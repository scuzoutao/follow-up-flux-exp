/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';

import * as DepartmentActionCreators from '../../../actions/Department/DepartmentActionCreators';
import DepartmentStore from '../../../stores/Department/DepartmentStore';
import connectToStores from '../../../decorators/connectToStores';

var output;

function parseId(params) {
  return parseInt(params.id);
}

function requestData(props) {
  const { params } = props;
  const DepartmentId = parseId(params);
  DepartmentActionCreators.requestDepartment(DepartmentId, ['name', 'description']);
}

function getState(props) {
  const id = parseId(props.params);
  const department = DepartmentStore.get();
  if (id !== department.id) {
    return {};
  }
  output = <h1>{department.name}</h1>;
  return { department };
}

@connectToStores([DepartmentStore], getState)
export default class Show extends Component{

  static propTypes = {
    // Injected by React Router:
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired,

    // Injected by @connectToStores:
    department: PropTypes.object,
  };

  componentWillMount() {
    output = <h1>Loading...</h1>
    requestData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id !== this.props.params.id) {
      output = <h1>Loading...</h1>
      requestData(nextProps);
    }
  }

  render() {
    const { department, params } = this.props;
    const id = params.id;
    console.log('=======RENDER Start=======');
    console.log(department);
    console.log('=======RENDER End=======');

    return (
      <DocumentTitle title='科室'>
        <div className="component show">
          <div className="wrap">
            <div className="ui page grid">
              <div className="sixteen wide column">
                { output }
                <Link to="/departments/15">15</Link>
                <Link to="/departments/16">16</Link>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }

}
