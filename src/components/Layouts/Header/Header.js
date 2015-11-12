/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component } from 'react';

require("./Header.scss");

import Left from './Left';
import Search from './Search';
import Right from './Right';

class Header extends Component {

  render() {
    return (
      <div className="component header">
        <div className="header">
          <div className="ui page grid">
            <div className="sixteen wide column">
              <div className="ui secondary menu">
                <Left />
                <Search />
                <Right />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Header;
