import React from 'react'

import ExploreCocktails from '../ExploreCocktails/ExploreCocktails';

import CardList from '../../Components/CardList/CardList'

const Main = (props) => {

    const { drinks } = props;

    console.log(drinks);
    return (
       <> 
        <div className="main">
            <CardList className="cocktail" drinks={drinks} />
        ))
            
        </div>

        <div className="explore">
            <h2 className="explore__heading">Explore</h2>
            <ExploreCocktails drinks={drinks} />
        </div>
       </> 
    )
}

export default Main