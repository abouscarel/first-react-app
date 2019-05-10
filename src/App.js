import React, { Component } from 'react';

import Membre from './components/Membre';
import Button from './components/Button';
import './App.css';

const famille = {
  membre1: {
    nom: 'Antonin',
    age: 24
  },
  membre2: {
    nom: 'Baptiste',
    age: 23
  },
  membre3: {
    nom: 'Justine',
    age: 18
  },
  membre4: {
    nom: 'Basile',
    age: 5
  },
}

class App extends Component {
  state = { 
    famille,
    isShow: false
  }

  handleClick = num => {
    const famille = { ...this.state.famille };
    famille.membre1.age += num;
    this.setState({ famille });
  }

  handleChange = event => {
    const famille = { ...this.state.famille };
    const nom = event.target.value;
    famille.membre1.nom = nom;
    this.setState({ famille })
  }

  handleShowDescription = () => {
    const isShow = !this.state.isShow;
    this.setState({ isShow })
  }

  render() {
    const { titre } = this.props;
    const { famille, isShow } = this.state;
    let description = null;
    
    if (isShow) {
      description = <strong>Je suis un chat</strong>
    }

    const liste = Object.keys(famille).map(membre => (
      <Membre
        nom={ famille[membre].nom }
        age={ famille[membre].age } />
    ))
    console.log(liste);

    return (
      <div className="App">
        <h1>{ titre }</h1>
        <input 
          type="text"
          value={famille.membre1.nom} 
          onChange={ this.handleChange } />
        { liste }
        <Membre 
          nom={ famille.membre4.nom }
          age={ famille.membre4.age }>
          { description }
          <button onClick={ this.handleShowDescription }>
            { isShow ? 'Cacher' : 'Montrer' }
          </button>
        </Membre>
        <Button
          vieillir={ () => this.handleClick(2) } />
      </div>
    );
  }
}

export default App;
