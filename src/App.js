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
      show: false,
      selectedBeast: {},
      horns: -1,
      beasts: data,
    }
  }

  handleClose = () => this.setState({show: false});

  handleOpen = beastId => {
    console.log('beastId: ', beastId);
    const selectedBeast = data.find(beast => beast._id === beastId);
    this.setState({show: true, selectedBeast: selectedBeast});
  }

  selectHorns = event => {
    event.preventDefault();
    this.setState({horns: Number(event.target.value)}, () => this.state.horns === -1 ? this.setState({beasts: data}) : this.setState({beasts: data.filter(currentBeast => currentBeast.horns === this.state.horns)}));
  }

render() {
    return (
      <div className="App">
        <Header 
          selectHorns = {this.selectHorns}
        />
        <Main
          beasts = {this.state.beasts}
          handleOpen = {this.handleOpen}
        />
        <BeastModal
          show = {this.state.show}
          handleClose = {this.handleClose}
          selectedBeast = {this.state.selectedBeast}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
