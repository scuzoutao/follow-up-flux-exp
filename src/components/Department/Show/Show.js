/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import Head from './Head'

export default class Show extends Component{

  render() {

    return (
      <DocumentTitle title={this.props.department.name}>
        <div className="component show">
          <div className="wrap">
            <div className="ui page grid">
              <div className="sixteen wide column">
                <Head {...this.props}/>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }

}
