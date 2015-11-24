/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component } from 'react';
import { Link } from 'react-router';

import DoctorStore from '../../../stores/Department/DoctorStore';

export default class HeadRight extends Component {

  constructor(props) {
    super(props);
    this.state = {saving: true};
    this._onSavingStarts = this._onSavingStarts.bind(this)
    this._onSavingEnds = this._onSavingEnds.bind(this)
  }

  componentDidMount() {
    DoctorStore.addEventListener('save', this._onSavingStarts);
    DoctorStore.addEventListener('error', this._onSavingEnds);
    DoctorStore.addChangeListener(this._onSavingEnds);
  }

  componentWillUnmount() {
    DoctorStore.removeEventListener('save', this._onSavingStarts);
    DoctorStore.removeEventListener('error', this._onSavingEnds);
    DoctorStore.removeChangeListener(this._onSavingEnds);
  }

  render() {
    let back_url = "/departments/" + this.props.department.id

    if (this.state.saving) {
      var save_button = (
        <div className="ui disabled small loading button">
          <i className="save icon"></i>
          保存
        </div>
      )
    } else {
      var save_button = (
        <div className="ui primary small button" onClick={this.props.onSave}>
          <i className="save icon"></i>
          保存
        </div>
      )
    }

    return (
      <div className="float-right column">
        {save_button}
        <div className="ui red small button">
          <i className="trash icon"></i>
          删除
        </div>
        <Link className="ui small button" to={back_url}>取消</Link>
      </div>
    );
  }

  _onSavingStarts() {
    this.setState({saving: true});
  }

  _onSavingEnds() {
    this.setState({saving: false});
  }

}
