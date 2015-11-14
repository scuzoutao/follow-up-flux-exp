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

function requestData(props) {
  const id = props.params.id;
  DepartmentActionCreators.requestDepartment(id, ['name', 'description']);
}

function getState(props) {
  const id = props.params.id;
  const department = DepartmentStore.get();
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
    requestData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id !== this.props.params.id) {
      requestData(nextProps);
    }
  }

  render() {
    const { department, params } = this.props;
    const id = params.id;

    return (
      <DocumentTitle title='科室'>
        <div className="component show">
          <div className="wrap">
            <div className="ui page grid">
              <div className="sixteen wide column">
                {department ?
                  department.name :
                  <h1>Loading...</h1>
                }
                <Link to="/departments/16">16</Link>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }

}
