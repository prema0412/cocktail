import React, { useState, useEffect} from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import drinks from './data/drinks';
import Nav from './Containers/Nav/Nav'
import Main from './Containers/Main/Main'
import Card from './Components/Card/Card'
import { matchSorter } from 'match-sorter';


const App = () => {

  const [ user, setUser ] = useState({
    firstName: "Prema",
    lastName: "Chhaya",
  });

  const [fetchedDrinks, setfetchedDrinks] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [isCheckedBanana, setIsCheckedBanana] = useState(false);
  const [isCheckedMango, setIsCheckedMango] = useState(false);
  const [isCheckedChocolate, setIsCheckedChocolate] = useState(false);
  const [isCheckedCoffee, setIsCheckedCoffee] = useState(false);

  const handleChangeBanana = event => {
    setIsCheckedBanana( !isCheckedBanana )
}

const handleChangeMango = event => {
  setIsCheckedMango( !isCheckedMango )
}

const handleChangeChocolate = event => {
  setIsCheckedChocolate( !isCheckedChocolate )
}

const handleChangeCoffee = event => {
  setIsCheckedCoffee( !isCheckedCoffee )
}



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

  
 let drinks = fetchedDrinks;

 console.log(drinks);

  const handleSearchTerm = (filteredDrinks,searchTerm) => {

   console.log("I am Here in search term");

    filteredDrinks = fetchedDrinks.filter(drink => 
      {
         const drinkTitleLower = drink.strDrink.toLowerCase();

          return drinkTitleLower.includes(searchTerm) && drink.strDrinkThumb;
       })

       return filteredDrinks;
}


  
  if (searchTerm) {

    let filteredDrinks = []

    filteredDrinks = handleSearchTerm(filteredDrinks,searchTerm);

    if (filteredDrinks.length > 0) {
      drinks = filteredDrinks
      console.log(drinks);
    }
    else drinks = fetchedDrinks;
  
  }



let searchkeys = []

if (isCheckedBanana) {
  searchkeys.push("banana")
}


if (isCheckedMango) {
  searchkeys.push("mango")
}

if (isCheckedChocolate) {
  searchkeys.push("chocolate")
}

if (isCheckedCoffee) {
  searchkeys.push("coffee")
}

if (searchkeys.length) {

}



const handleSearchKeys = (filteredDrinks,searchKeys) => {

  console.log("I am Here in search key");

  searchkeys.map( key => {
  console.log(key);

    filteredDrinks.push(matchSorter(fetchedDrinks, key, {keys: ['strDrink']})) 

    console.log(filteredDrinks);

    return filteredDrinks


  })

}


if (searchkeys.length) {

  console.log(searchkeys);

  let filteredDrinks = []

  handleSearchKeys(filteredDrinks,searchkeys);
  console.log(filteredDrinks);

  if (filteredDrinks) {
    drinks = filteredDrinks
  } else drinks = fetchedDrinks;

}


  


  




//  if (isCheckedBanana) {
//   drinks = fetchedDrinks.filter(drink => 
//     {
//        const drinkTitleLower = drink.strDrink.toLowerCase();

//         return drinkTitleLower.includes("banana") && drink.strDrinkThumb;
//      })
//  }

  return (

    <Router>

    <div className="app">

      <Nav userName={`${user.firstName} ${user.lastName}`} handleSubmit={handleSubmit} searchTerm={searchTerm} 
      isCheckedBanana={isCheckedBanana} isCheckedMango={isCheckedMango} isCheckedCoffee={isCheckedCoffee} 
      isCheckedChocolate={isCheckedChocolate} 
      handleChangeBanana={handleChangeBanana} handleChangeMango={handleChangeMango}
      handleChangeChocolate={handleChangeChocolate} handleChangeCoffee={handleChangeCoffee} 
      handleInput={handleInput}/>

      <Routes>
       <Route exact path="/" element={fetchedDrinks && <Main className="main" drinks={drinks} /> }/>

       <Route path="/cards/:title" element={fetchedDrinks && <Card className="card" drinks={drinks} /> }/>

      </Routes>

      </div>

    </Router>
   
   
  )
}

export default App