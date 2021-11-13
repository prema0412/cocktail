import React from 'react'

import { Link } from 'react-router-dom';

import './CardList.scss'


const CardList = (props) => {

    const { drinks } = props;

    console.log(drinks);

    return (
        <>
            {drinks.map( (drink) => (
            <div key={drink.idDrink} className="cocktail">
            <img className="cocktail__image" src={drink.strDrinkThumb} alt="" />
            <h1 className="cocktail__title">{drink.strDrink}</h1>
            <Link clasName="cocktail__link" to={`cards/${drink.idDrink}`}>View More</Link>
           </div>
            ))
            }
        </>
    )
}

export default CardList