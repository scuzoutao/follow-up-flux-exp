/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component } from 'react';
import { Link } from 'react-router';

class Right extends Component {

  render() {
    return (
      <div className="right menu">
        <Link className="item" to="/signin">
          <i className="sign in icon"></i>
          登录
        </Link>
        <Link className="item" to="/signup">
          <i className="add user icon"></i>
          注册
        </Link>
      </div>
    );
  }

}

export default Right;
