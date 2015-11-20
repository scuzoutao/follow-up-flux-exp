/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component } from 'react';

import HeadLeft from './HeadLeft'
import HeadRight from './HeadRight'

export default class Head extends Component {

  render() {

    return (
      <div className="component head">
        <HeadLeft department={{name : '泌尿外科'}}/>
        <HeadRight onSave={this.props.onSave}/>
        <div className="clear-both"></div>
      </div>
    );
  }

}
