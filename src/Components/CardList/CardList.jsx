import React from 'react'

import { Link } from 'react-router-dom';


const CardList = (props) => {

    const { drinks } = props;

    return (
        <>
            {drinks.map( (drink) => (
            <div key={drink.idDrink} className="cocktail">
            <img className="cocktail__image" src={drink.strDrinkThumb} alt="" />
            <h1 className="cocktail__title">{drink.strDrink}</h1>
            <Link to={`cards/${drink.strDrink}`}>View More</Link>
           
        </div>
            ))
            }
        </>
    )
}

export default CardList