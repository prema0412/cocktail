import React, { useState } from "react";

import SearchBox from "../../Components/SearchBox/SearchBox";
import CardList  from "../../Components/CardList/CardList";

const ExploreCocktails = props => {
  const { drinks } = props;
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = event => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredDrinks = drinks.filter(drink => {
    const drinkTitleLower = drink.strDrink.toLowerCase();

    return drinkTitleLower.includes(searchTerm) && drink.strDrinkThumb;
  });

  return (
    <>
      <SearchBox label={"Cocktails"} searchTerm={searchTerm} handleInput={handleInput} />
      <CardList className="cocktail" drinks={filteredDrinks} />
    </>
  );
};

export default ExploreCocktails;