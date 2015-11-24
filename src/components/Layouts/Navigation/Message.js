/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component } from 'react';

import DoctorStore from '../../../stores/Department/DoctorStore';

require("./Message.scss");

export default class Message extends Component {

  constructor(props) {
    super(props);
    this.state = {show: false};
    this._onShowMessage = this._onShowMessage.bind(this);
    this._onHideMessage = this._onHideMessage.bind(this);
  }

  componentDidMount() {
    $('.ui.message').transition({
      animation: 'fly down',
      duration: '0s'
    });
    DoctorStore.addChangeListener(this._onShowMessage);
  }

  render() {
    return (
      <div className="component message">
        <div className="ui warning message">
          <i className="close icon" onClick={this._onHideMessage}></i>
          <div className="header">
            You must register before you can do that!
          </div>
          Visit our registration page, then try again
        </div>
    </div>
    )
  }

  _onShowMessage() {
    if (!this.state.show) {
      $('.ui.message').transition('fly down');
      this.setState({show: true});
      window.setTimeout(this._onHideMessage, 5000);
    }
  }

  _onHideMessage() {
    if (this.state.show) {
      $('.ui.message').transition('fly down');
      this.setState({show: false});
    }
  }

}
