import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { Book, IProps } from '../components/Book';
import * as BookActions from '../actions/book';
import { IState } from '../reducers';

function mapStateToProps(state: IState): Partial<IProps> {
  return {
    pages: state.pages
  };
}

function mapDispatchToProps(dispatch: Dispatch<IState>): Partial<IProps> {
  return bindActionCreators(BookActions as any, dispatch);
}

export default (connect(mapStateToProps, mapDispatchToProps)(Book) as any as React.StatelessComponent<IProps>);
