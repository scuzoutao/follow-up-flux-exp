/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component } from 'react';

import Message from './Message'

class Navigation extends Component {

  render() {
    return (
      <div className="wrap">
        <div className="ui page grid">
          <Message />
          <div className="sixteen wide column">
            <div className="ui large breadcrumb">
              <a className="section" href="/">首页</a>
              <i className="right chevron icon divider"></i>
              <a className="section" href="/categories">全部分类</a>
              <i className="right chevron icon divider"></i>
              <a className="section" href="/categories/14">肾脏、生殖系统疾病</a>
              <i className="right chevron icon divider"></i>
              <div className="active section">
                泌尿外科
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Navigation;
