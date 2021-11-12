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

  const [fetchedDrinks, setfetchedDrinks] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let firstName = event.target[0].value;
    let lastName = event.target[1].value;

    if ( firstName && lastName ) {
      event.target.reset();
      setUser( {firstName, lastName} )
    }

  }

  const handleInput = event => {
    console.log("handling input in App");
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  }

  useEffect( () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
      .then (res => res.json())
      .then (data => setfetchedDrinks(data.drinks))
      .then (console.log(drinks))
      .catch (err => console.log(err))
  }, []);

  
  let drinks = [];

  
  if (searchTerm) {
  
          drinks = fetchedDrinks.filter(drink => 
          {
             const drinkTitleLower = drink.strDrink.toLowerCase();

              return drinkTitleLower.includes(searchTerm) && drink.strDrinkThumb;
           })
}
  else {
          drinks = fetchedDrinks;
  }

  console.log(drinks);

  return (

    <Router>

    <div className="app">

      <Nav userName={`${user.firstName} ${user.lastName}`} handleSubmit={handleSubmit} searchTerm={searchTerm} handleInput={handleInput}/>

      <Routes>
       <Route exact path="/" element={fetchedDrinks && <Main className="main" drinks={drinks} /> }/>

       <Route path="/cards/:title" element={fetchedDrinks && <Card className="card" drinks={drinks} /> }/>

      </Routes>

      </div>

    </Router>
   
   
  )
}

export default App