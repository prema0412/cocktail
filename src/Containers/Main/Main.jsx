import React from 'react'

import CardList from '../../Components/CardList/CardList'

const Main = (props) => {

    const { drinks } = props;

    return (
       <> 
        <div className="main">
            <CardList className="cocktail" drinks={drinks} />
        ))
            
        </div>
       </> 
    )
}

export default Main