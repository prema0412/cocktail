
import React from 'react'

const CardList = (props) => {

    const { key, drinkName, image } = props;

    //console.log(drink);

    return (
        <div className="cocktail">
            <img className="cocktail__image" src={image} alt="" />
            <h1 className="cocktail__title">{drinkName}</h1>
           
        </div>
    )
}

export default CardList
