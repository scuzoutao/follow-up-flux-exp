/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';

import * as DepartmentActionCreators from '../../../actions/Department/DepartmentActionCreators';

import Head from './Head'
import Tab from './Tab'
import TabBasic from './TabBasic'
import TabDoctor from './TabDoctor'
import TabAdmin from './TabAdmin'

export default class Edit extends Component {

  render() {

    const { department } = this.props;
    var title = '编辑: ' + department.name;

    return (
      <DocumentTitle title={title}>
        <div className="component edit">
          <div className="wrap">
            <div className="ui page grid">
              <div className="sixteen wide column">
                <Head {...this.props}/>
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

}
