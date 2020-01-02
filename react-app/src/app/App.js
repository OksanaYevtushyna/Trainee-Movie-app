import React from 'react';
import './App.css';
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import Aside from '../aside/Aside'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Aside />
        <Footer />
      </div>
    );
  }
}

export default App;
