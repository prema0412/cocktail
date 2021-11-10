
import React from 'react'

import CardList from '../../Components/CardList/CardList'

const Main = (props) => {

    const { drinks } = props;

    console.log(drinks);
    return (
        <div>
            <CardList />
        </div>
    )
}

export default Main
