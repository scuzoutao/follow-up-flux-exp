/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

require("./Edit.scss");

class Edit extends Component {

  render() {
    return (
      <DocumentTitle title='编辑'>
        <div className="component edit">
          <div className="wrap">
            <div className="ui page grid">
              <div className="sixteen wide column">
                <div className="float-left column">
                  <h2 className="ui header title">
                    <i className="small edit icon" style={{display: 'inline'}}></i>
                    编辑科室：泌尿外科
                  </h2>
                </div>
                <div className="float-right column">
                  <div className="ui primary small button">
                    <i className="save icon"></i>
                    保存
                  </div>
                  <div className="ui red small button">
                    <i className="trash icon"></i>
                    删除
                  </div>
                  <a className="ui small button" href="/departments/15">取消
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }

}

export default Edit;
