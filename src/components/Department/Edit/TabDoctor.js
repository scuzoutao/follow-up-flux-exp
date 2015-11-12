/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component } from 'react';

import TabDoctorTable from './TabDoctorTable'

export default class TabDoctor extends Component {

  render() {
    return (
      <div className="ui tab" data-tab="doctor">
        <div className="ui hidden divider"></div>
        <TabDoctorTable />
      </div>
    );
  }

}
