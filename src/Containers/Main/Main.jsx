
import React from 'react'

import CardList from '../../Components/CardList/CardList'

const Main = (props) => {

    const { drinks } = props;

    console.log(drinks);
    return (
        <div className="main">
        {drinks.map( (drink, index) => (
            <CardList className="cocktail" key={drink.idDrink} drinkName={drink.strDrink} image={drink.strDrinkThumb}/>
        ))}
            
        </div>
    )
}

export default Main
