import * as React from 'react';
//import { Link } from 'react-router-dom';

let styles = require('./Page.scss');

interface IPageProps extends React.Props<any>
{
  text:string
}

export default class Page extends React.Component<IPageProps> {
  render() {
    return (
      <div>
        <div className={styles.page} data-tid="container">
          <h2>{this.props.text}</h2>
        </div>
      </div>
    );
  }
}
