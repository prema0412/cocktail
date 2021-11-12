
import React from 'react'
import FiltersList from '../../Components/FiltersList/FiltersList';
import blackCross from '../../Assets/images/black-cross.png';
import SearchBox from '../SearchBox/SearchBox';

const NavMenu = (props) => {



    const { searchTerm, handleInput, handleChange} = props;

    console.log("In Nav Menu");

    return (
        <div className="nav-menu">
            <div className="nav-menu__content">
             <div className="nav__searchBox">
             <SearchBox  label={"Cocktail..."} searchTerm={searchTerm} handleInput={handleInput}  />
              </div>

             <div className="nav__filtersList">
                  <FiltersList handleChange={handleChange}/>
              </div>
            </div>
        </div>
    )
}

export default NavMenu ;
