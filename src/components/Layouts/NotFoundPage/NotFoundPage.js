/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import { RouteHandler } from 'react-router';
import DocumentTitle from 'react-document-title';

import withStyles from '../../../decorators/withStyles';
import styles from './NotFoundPage.css';

@withStyles(styles)
class NotFoundPage extends Component {

  render() {
    return (
      <DocumentTitle title='404-Page Not Found'>
        <div>
          <p>Sorry, but the page you were trying to view does not exist.</p>
        </div>
      </DocumentTitle>
    );
  }

}

export default NotFoundPage;
