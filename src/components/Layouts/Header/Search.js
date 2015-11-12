/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component } from 'react';

class Search extends Component {

  render() {
    return (
      <div className="item">
        <div className="ui icon input">
          <input placeholder="搜索" type="text" />
          <i className="search link icon"></i>
        </div>
      </div>
    );
  }

}

export default Search;
