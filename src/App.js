import React from 'react';
import './App.css';
import data from './data.json';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import BeastModal from './BeastModal';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showBeastModal: false
    }
  }

  handleCloseModal = () => {
    this.setState({showBeastModal: false});
  }

  handleShowModal = () => {
    this.setState({showBeastModal: true});
  }

render() {
    return (
      <div className="App">
        <Header />
        <Main
          beasts = {data}  
        />
        <BeastModal
          show={this.state.showBeastModal}
          handleClose={this.handleCloseModal}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
