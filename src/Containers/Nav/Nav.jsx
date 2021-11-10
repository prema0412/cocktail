
import React, {useState} from 'react'

import SearchBox from '../../Components/SearchBox/SearchBox'

const Nav = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInput = event => {
        const cleanInput = event.target.toLowerCase();
        setSearchTerm(cleanInput);
    }

    return (
        <div>
            <SearchBox label={"Get Your Favorite Cocktail "} searchTerm={searchTerm} handleInput={handleInput}  />
        </div>
    )
}

export default Nav
