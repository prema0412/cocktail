

import React, { useState, useEffect} from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import drinks from './data/drinks';
import Nav from './Containers/Nav/Nav'
import Main from './Containers/Main/Main'
import Card from './Components/Card/Card'


const App = () => {

  const [ user, setUser ] = useState({
    firstName: "Prema",
    lastName: "Chhaya",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    let firstName = event.target[0].value;
    let lastName = event.target[1].value;

    if ( firstName && lastName ) {
      event.target.reset();
      setUser( {firstName, lastName} )
    }

  }

  useEffect( () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
      .then (res => res.json())
      .then (data => data.drinks)
      .then (console.log(drinks))
      .catch (err => console.log(err))
  }, []);

  return (

    <Router>

    <div className="app">

      <Nav userName={`${user.firstName} ${user.lastName}`} handleSubmit={handleSubmit} />

      <Routes>
       <Route exact path="/" element={<Main className="main" drinks={drinks} /> }/>

       <Route path="/cards/:title" element={<Card className="card" drinks={drinks} /> }/>

      </Routes>

      </div>

    </Router>
   
   
  )
}

export default App
