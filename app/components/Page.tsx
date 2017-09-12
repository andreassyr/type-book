import * as React from 'react';
//import { Link } from 'react-router-dom';

let styles = require('./Page.scss');

interface IPageProps extends React.Props<any>
{
  text:string,
  pageNumber:number
}

export default class Page extends React.Component<IPageProps> {
  render() {
    let evenClass = this.props.pageNumber%2 ==0?styles.even:styles.odd;
    let cssClasses = `${styles.page} ${evenClass}`;
    return (
      <div>
        <div className={cssClasses}>
          <h2>{this.props.text}</h2>
        </div>
      </div>
    );
  }
}
