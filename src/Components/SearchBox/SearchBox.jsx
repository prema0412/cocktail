
import React from 'react'
import './SearchBox.scss'

const SearchBox = (props) => {
    const { label, searchTerm, handleInput } = props;
    
    return (
        <form className="nav__searchBox">
        <label htmlFor={label} className="nav__searchBox__label">{label}</label>
        <input type="text" name={label} value={searchTerm} onChange={handleInput} placeHolder="Search..." className="nav__searchBox__input"/>
      </form>
    )
}

export default SearchBox
