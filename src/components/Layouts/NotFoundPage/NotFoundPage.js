/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import { RouteHandler } from 'react-router';

import withStyles from '../../../decorators/withStyles';
import styles from './NotFoundPage.css';

@withStyles(styles)
class NotFoundPage extends Component {

  render() {
    return (
      <div>
        <p>Sorry, but the page you were trying to view does not exist.</p>
      </div>
    );
  }

}

export default NotFoundPage;
