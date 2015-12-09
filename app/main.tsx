/// <reference path="../typings/react/react-global.d.ts" />

import SearchBar from './components/searchbar/searchbar.tsx';
import * as React from 'react';

export default class Main extends React.Component<any, any> {
  render() {
    return (
      <div className="container">
        <div>Erik tester</div>
        {this.props.children}
      </div>
    );
  }
}
