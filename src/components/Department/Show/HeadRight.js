/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HeadRight extends Component {

  render() {
    const { department } = this.props;
    var url;
    if (department) {
      url = "/departments/"+department.id+"/edit";
    } else {
      url = '';
    }


    return (
      <div className="float-right column">
        <Link className="ui small button" to={url}>
          <i className="edit icon"></i>
          编辑
        </Link>
        <div className="ui small button">
          <i className="star icon"></i>
          收藏
        </div>
      </div>
    );
  }

}
