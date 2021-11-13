
import React from 'react'

import './FiltersList.scss'

const FiltersList = (props) => {

    const { isCheckedBanana, isCheckedMango, isCheckedChocolate, isCheckedCoffee, handleChangeBanana, handleChangeMango, handleChangeChocolate, handleChangeCoffee  } = props;

    return (
        <>
        <ul className="nav__filtersList">
           <li>
                  With Banana  
                <input className="nav__filtersList-item" type="checkbox" id="banana" name="banana" value="With Banana" checked={isCheckedBanana} onChange={handleChangeBanana} />
               
           </li>
           <li>
                 With Mango  
                 <input className="nav__filtersList-item" type="checkbox" id="mango" name="mango" value="With Mango" checked={isCheckedMango} onChange={handleChangeMango} />
                
           </li>
           <li>
                 With Chocolate  
                  <input className="nav__filtersList-item" type="checkbox" id="chocolate" name="chocolate" value="With Chocolate" checked={isCheckedChocolate} onChange={handleChangeChocolate} />
                  
           </li>
           <li>
                 With Coffee  
                 <input className="nav__filtersList-item" type="checkbox" id="coffe" name="coffe" value="With Coffee" checked={isCheckedCoffee} onChange={handleChangeCoffee} />
                
           </li>
           
        </ul>        
        </>
    )
}

export default FiltersList
