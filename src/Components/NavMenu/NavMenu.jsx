
import React from 'react'
import FiltersList from '../../Components/FiltersList/FiltersList';
import blackCross from '../../Assets/images/black-cross.png';
import SearchBox from '../SearchBox/SearchBox';

const NavMenu = (props) => {



    const { searchTerm, isCheckedBanana, isCheckedMango, isCheckedChocolate, isCheckedCoffee, handleChangeBanana, 
        handleChangeMango,handleChangeChocolate,handleChangeCoffee,
        handleInput } = props;


    return (
        <div className="nav-menu">
            <div className="nav-menu__content">
             <div className="nav__searchBox">
             <SearchBox  label={"Cocktail..."} searchTerm={searchTerm} handleInput={handleInput} />
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
