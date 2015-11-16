/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component, PropTypes} from 'react';

export default class HeadLeft extends Component {

  render() {
    const { department } = this.props;

    return (
      <div className="float-left column">
        <h2 className="ui header title">
          科室：{ department.name }
        </h2>
      </div>
    );
  }

}
