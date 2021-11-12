
import React, {useState} from 'react'

import SearchBox from '../../Components/SearchBox/SearchBox'

import FiltersList from '../../Components/FiltersList/FiltersList';

const Nav = () => {
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ isChecked, setIsChecked ] = useState(false)

    const handleInput = event => {
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput);
    }

    const handleChange = event => {
        setIsChecked( !isChecked )
    }

    return (
        <div className="nav">

            <div className="nav__searchBox">
            <SearchBox  label={"Cocktail..."} searchTerm={searchTerm} handleInput={handleInput}  />
            </div>

            <div className="nav__filtersList">
            <FiltersList handleChange={handleChange}/>
            </div>
        </div>
    )
}

export default Nav
