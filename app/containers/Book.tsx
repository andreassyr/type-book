import * as React from 'react';
import {findDOMNode} from 'react-dom';
import { RouteComponentProps } from 'react-router';
import Page from '../components/Page';
import 'turn.js/turn.js';
import './book.global.scss';

export class Book extends React.Component<RouteComponentProps<any>, void> {
  render() {
    var pages:Array<JSX.Element>=[];
    for(let i=0;i<20;i++)
      pages.push(<Page key={i} text={'Page '+ i}/>);

    return (
      <div ref="book">
        {pages}
      </div>
    );
  }
  componentDidMount() {
    const book = findDOMNode(this.refs.book);
    $(book).turn({
      width:800,
      height:600,
      autocenter:true
    });
  }
}

export default (Book as any as React.StatelessComponent<RouteComponentProps<any>>);
