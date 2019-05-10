import React, { Component } from "react";

import Membre from "./components/Membre";
import "./App.css";

const famille = {
  membre1: {
    nom: "Antonin",
    age: 24
  },
  membre2: {
    nom: "Baptiste",
    age: 23
  },
  membre3: {
    nom: "Justine",
    age: 18
  },
  membre4: {
    nom: "Basile",
    age: 5
  }
};

class App extends Component {
  state = {
    famille,
    isShow: false
  };

  /**
   * Handle button click 
   * @function handleClick
   * @param  {number} num age to add
   */
  handleClick = num => {
    const famille = { ...this.state.famille };
    famille.membre1.age += num;
    this.setState({ famille });
  };

  handleChange = (event, id) => {
    const famille = { ...this.state.famille };
    const nom = event.target.value;
    famille[id].nom = nom;
    this.setState({ famille });
  };

  cacherNom = id => {
    const famille = { ...this.state.famille };
    famille[id].nom = "X";
    this.setState({ famille });
  };

  render() {
    const { titre } = this.props;
    const { famille } = this.state;

    const liste = Object.keys(famille).map(membre => (
      <Membre
        key={membre}
        handleChange={event => this.handleChange(event, membre)}
        cacherNom={() => this.cacherNom(membre)}
        nom={famille[membre].nom}
        age={famille[membre].age}
      />
    ));
    console.log(liste);

    return (
      <div className="App">
        <h1>{titre}</h1>
        {liste}
      </div>
    );
  }
}

export default App;
