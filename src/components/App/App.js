/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { PropTypes, Component } from 'react';
import DocumentTitle from 'react-document-title';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object
  };

  render() {
    return (
      <DocumentTitle title='Sample App'>
        <div className='App'>
          {this.props.children}
        </div>
      </DocumentTitle>
    );
  }
}
