/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />

import SearchBar from './components/searchbar/searchbar.tsx';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

class AppComponent extends React.Component<any, any> {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <SearchBar/>
      </div>
    );
  }
}
ReactDOM.render(<AppComponent/>, document.getElementById('app'));
