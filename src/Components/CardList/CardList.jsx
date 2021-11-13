import React from 'react'

import { Link } from 'react-router-dom';

import './CardList.scss'


const CardList = (props) => {

    const { drinks } = props;

    console.log(drinks);

    return (
        <>
            {drinks.map( (drink, index) => (
            <div key={drink.IdDrink} className="cocktail">
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