
import React, { useState, useEffect} from 'react';

import { useParams } from 'react-router-dom';

import './Card.scss'

const Card = (props) => {

    const { drinks } = props;

    const { title } = useParams();

    console.log("title " +title);

    const fetchIngrdients = ( () => {

        console.log("calling API");

        const apistring = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=12672`;
        console.log(apistring);
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${title}`)
          .then (res => res.json())
          .then (data => console.log(data.ingredients))
          .catch (err => console.log(err))
      });


    if ( title )

    {
        console.log("I am here");
        fetchIngrdients();
    }

  



    
    const drink = drinks.filter(card => card.strDrink === title);

    return (
        <section className="card" >
            <div className="card__container">

            { drinks.filter(card => card.strDrink === title)
            .map( (card, index) => (
                <div key={index} className="card__item">
                    <h2>...Enjoy your Cocktail...</h2>
                    <img src={card.strDrinkThumb} alt="" />
                </div>    
            ))}

            </div>

        </section>



       
    )
}

export default Card;
