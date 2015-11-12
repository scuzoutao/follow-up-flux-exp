/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { PropTypes, Component } from 'react';
import { Router, Route, NotFoundRoute } from 'react-router';

import App from './components/App';
import NotFoundPage from './components/Layouts/NotFoundPage';

import Department from './components/Department';

export default class Routes extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render() {
    const { history } = this.props;
    return (
      <Router history={history}>
        <Route name='app' path='/' component={App}>
          <Route name='department' path='/department' component={Department} />
        </Route>
        <Route path="*" component={ NotFoundPage }/>
      </Router>
    );
  }
}
