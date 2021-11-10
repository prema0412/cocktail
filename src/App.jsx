

import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import drinks from './data/drinks';
import Nav from './Containers/Nav/Nav'
import Main from './Containers/Main/Main'

const App = () => {

  console.log(drinks);

  let cocktailList = [];

  cocktailList = drinks

  return (
    <section class="app">
    <Nav />
    <Main class="main" drinks={cocktailList}/>
    </section>
  )
}

export default App
