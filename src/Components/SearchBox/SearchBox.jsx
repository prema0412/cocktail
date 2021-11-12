
import React from 'react'

const SearchBox = (props) => {
    const { label, searchTerm, handleInput } = props;
    
    return (
        <form className="nav__searchBox">
        <label htmlFor={label} className="nav__searchBox__label">{label}</label>
        <input type="text" name={label} value={searchTerm} onChange={handleInput} className="nav__searchBox__input"/>
      </form>
    )
}

export default SearchBox
