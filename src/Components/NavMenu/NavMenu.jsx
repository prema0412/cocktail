
import React from 'react'
import FiltersList from '../../Components/FiltersList/FiltersList';
import blackCross from '../../Assets/images/black-cross.png';
import SearchBox from '../SearchBox/SearchBox';

const NavMenu = (props) => {



    const { searchTerm, isCheckedBanana, isCheckedMango, isCheckedChocolate, isCheckedCoffee, handleChangeBanana, 
        handleChangeMango,handleChangeChocolate,handleChangeCoffee,
        handleInput, toggleNav } = props;


    return (
        <div className="nav-menu">
            <div className="nav-menu__content">
             <div className="nav__searchBox">
             <img src={blackCross} alt="Close menu" className="black-cross" onClick={toggleNav} />   
             <SearchBox  label={"Find Cocktail..."} searchTerm={searchTerm} handleInput={handleInput} />
              </div>

             <div>
                  <FiltersList isCheckedBanana={isCheckedBanana} isCheckedMango={isCheckedMango} 
                  isCheckedChocolate={isCheckedChocolate} 
                  isCheckedCoffee={isCheckedCoffee} 
                  handleChangeBanana={handleChangeBanana}
                  handleChangeMango={handleChangeMango}
                  handleChangeChocolate={handleChangeChocolate}
                  handleChangeCoffee={handleChangeCoffee}
                 />
              </div>
            </div>
        </div>
    )
}

export default NavMenu ;
