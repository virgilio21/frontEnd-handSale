import React, { Component } from 'react';
import NavbarHandSale from './NavbarHandSale';
import SearchHandSale from './SearchHandSale';
import ListProducts from './ListProducts.js';
import InfoTicket from './InfoTicket.js';
import Pay from './Pay.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>

        <NavbarHandSale></NavbarHandSale>
        <SearchHandSale></SearchHandSale>
        <ListProducts></ListProducts>
        <InfoTicket></InfoTicket>
        <Pay></Pay>

        
           
      </div>
    );
  }
}

export default App;
