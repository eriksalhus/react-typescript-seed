/// <reference path="../../../typings/react/react.d.ts"/>

import * as React from 'react';

export default class SearchBar extends React.Component<any, any> {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label>Search by user id</label>
            <input type="text" className="form-control" id="search" placeholder="Search by user id"/>
          </div>
        </form>
      </div>
    );
  }
}
