/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component, PropTypes} from 'react';

import Edit from './Edit'

export default class HeadLeft extends Component {

  static propTypes = {
    department: PropTypes.object.isRequired
  }

  render() {

    const { department } = this.props;

    return (
      <div className="float-left column">
        <h2 className="ui header title">
          <i className="small edit icon"></i>
          编辑科室：{department.name}
        </h2>
      </div>
    );
  }

}
