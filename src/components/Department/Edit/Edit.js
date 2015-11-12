/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import Head from './Head'
import Tab from './Tab'
import TabBasic from './TabBasic'
import TabDoctor from './TabDoctor'
import TabAdmin from './TabAdmin'

require('./Edit.scss')

export default class Edit extends Component {

  render() {
    return (
      <DocumentTitle title='编辑'>
        <div className="component edit">
          <div className="wrap">
            <div className="ui page grid">
              <div className="sixteen wide column">
                <Head />
                <Tab />
                <TabBasic />
                <TabDoctor />
                <TabAdmin />
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }

}
