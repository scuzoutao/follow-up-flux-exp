/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component } from 'react';

import Header from '../Layouts/Header';
import Navigation from '../Layouts/Navigation';
import Edit from './Edit';

export default class Department extends Component {

  render() {
    return (
      <div className="component department">
        <Header />
        <Navigation />
        {this.props.children}
      </div>
    );
  }

}
