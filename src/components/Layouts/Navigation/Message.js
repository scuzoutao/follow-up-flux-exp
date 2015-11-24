/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component } from 'react';

require("./Message.scss");

export default class Message extends Component {

  render() {
    return (
      <div className="component message">
        <div className="ui warning message">
          <i className="close icon"></i>
          <div className="header">
            You must register before you can do that!
          </div>
          Visit our registration page, then try again
        </div>
    </div>
    )
  }

}
