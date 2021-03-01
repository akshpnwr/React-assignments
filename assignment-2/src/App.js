import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Components/ValidationComponent';
import CharComponent from './Components/CharComponent';

class App extends Component {
  state = {
    para: 'para',
  };

  changeLengthHandler = (e) => {
    const newPara = e.target.value;

    this.setState({
      para: newPara,
    });
  };

  deleteCharHandler = (e, index) => {
    const newPara = this.state.para.split('');

    newPara.splice(index, 1);

    this.setState({
      para: newPara.join(''),
    });
  };

  render() {
    const style = {
      display: 'inline-block',
      padding: '10px',
      textAlign: 'center',
      backgroundColor: 'grey',
      margin: '10px',
      color: 'white',
    };

    const charComponents = this.state.para
      .replace(/ /g, '')
      .split('')
      .map((char, i) => (
        <div style={style}>
          <CharComponent
            click={(e) => {
              this.deleteCharHandler(e, i);
            }}
            some={char}
          />
        </div>
      ));

    return (
      <div className="App">
        <h2>Assignment 2</h2>
        <input type="text" onChange={this.changeLengthHandler} />
        <p>{this.state.para}</p>
        <h3>{this.state.para.length}</h3>
        <ValidationComponent para={this.state.para} />
        {charComponents}
      </div>
    );
  }
}

export default App;
