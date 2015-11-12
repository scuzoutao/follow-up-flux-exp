/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { PropTypes, Component } from 'react';
import DocumentTitle from 'react-document-title';

import withStyles from '../../decorators/withStyles';
import semantic_css from '../../semantic/dist/semantic.css';
require('./App.scss');

@withStyles(semantic_css)
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object
  };

  render() {
    return (
      <div className='component app'>
        {this.props.children}
      </div>
    );
  }
}
