import * as React from 'react';
import {findDOMNode} from 'react-dom';
import { RouteComponentProps } from 'react-router';
import Page from '../components/Page';
import 'turn.js/turn.js';
import './book.global.scss';

var fs = require('fs');
const remote = require('electron').remote;
const filePath = process.env.NODE_ENV === 'production' ? remote.app.getAppPath() : './resources/book.json';

export class Book extends React.Component<RouteComponentProps<any>, void> {
  render() {
    var pages:Array<JSX.Element>=[];

    fs.readFile(filePath,'utf-8',function(err:any,data:any){
        if (err) return console.log(err);
        console.log(data);
    });

    for(let i=0;i<20;i++)
      pages.push(<Page key={i} text={'Page '+ i} pageNumber={i}/>);

    return (
      <div id="book" ref="book">
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
