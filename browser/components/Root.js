import React from 'react';
import Header from './header/header.component';

export default class Root extends React.Component {
  render() {
      return (
        <div>
          <Header />
          {this.props.children}
        </div>
      );
  }
}
