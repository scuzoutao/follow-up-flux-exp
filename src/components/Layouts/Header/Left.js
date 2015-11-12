/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component } from 'react';
import { Link } from 'react-router';

class Left extends Component {

  render() {
    return (
      <Link className="active item" to="/">
        <i className="home icon"></i>
        <span>首页</span>
      </Link>
    );
  }

}

export default Left;
