/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Demo extends React.Component<any, any> {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="form-group">
        <label >Search by user id</label>
        <input type="text" className="form-control" id="search" placeholder="Search by user id"/>
      </div>);
  }
}
ReactDOM.render(<Demo/>, document.getElementById('app'));
