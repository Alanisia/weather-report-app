import React from 'react';
import Main from './components/main/main';
import Navbar from './components/navbar/navbar';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Main />
        <Navbar />
      </div>
    );
  }
}
