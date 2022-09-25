import React from 'react';
import './App.css';
import data from './data.json';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main
          beasts = {data}  
        />
        <Footer />
      </div>
    );
  }
}

export default App;
