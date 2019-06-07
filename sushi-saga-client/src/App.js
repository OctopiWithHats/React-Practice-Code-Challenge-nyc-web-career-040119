import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"


class App extends Component {

  constructor(){
    super()
    this.state = {
      sushis: []
    }
  }

  getSushiData = () => {
    fetch(API)
      .then(response => response.json())
      .then(sushis => this.setState({sushis}))
    return this.state.sushis.slice(0,4)
  }

  render() {
    return (
      <div className="app">
        <SushiContainer showSushi={this.props.getSushiData} />
        <Table />
      </div>
    );
  }
}

export default App;


//I am definitely not ready for Tuesday. This had a lot of stuff that referenced labs I haven't done yet.

//In all honesty, the labs specifically pointed to us as practice for this (Hogwarts, the props state and events lab, etc.) did not prepare me for this. I was hardly expecting or famliar with const components, for example. I will do a lot of work this weekend to prepare.

//I'll do my best to be ready by tuesday, and I plan to do this again over the weekend and actually have a version that works to show by Monday.
