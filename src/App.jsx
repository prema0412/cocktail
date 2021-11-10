

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
    <>
    <Nav />
    <Main drinks={cocktailList}/>
    </>
  )
}

export default App
