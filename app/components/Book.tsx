import * as React from 'react';
import {findDOMNode} from 'react-dom';
import Page from '../components/Page';
import 'turn.js/turn.js';
import './book.global.scss';

export interface IProps extends  React.Props<any>
{
  loadBook():void,
  pages:Array<any>
}

export class Book extends React.Component<IProps> {
  render() {
    var pages:Array<JSX.Element>=[];

    for(let i=0;i<20;i++)
      pages.push(<Page key={i} text={'Page '+ i} pageNumber={i}/>);

    return (
      <div id="book" ref="book">
        {pages}
      </div>
    );
  }
  componentDidMount() {
    this.props.loadBook();
    const book = findDOMNode(this.refs.book);
    $(book).turn({
      width:800,
      height:600,
      autocenter:false
    });
  }
}

export default Book;
