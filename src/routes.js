/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { PropTypes, Component } from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';

export default class Routes extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render() {
    const { history } = this.props;
    return (
      <Router history={history}>
        <Route path='/' component={App}>
        </Route>
      </Router>
    );
  }
}
