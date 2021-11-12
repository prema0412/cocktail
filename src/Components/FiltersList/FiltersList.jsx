
import React from 'react'

const FiltersList = (props) => {

    const { handleChange } = props;

    return (
        <>
        <ul className="nav__filtersList">
           <li>
                  With Banana  
                <input className="nav__filtersList-item" type="checkbox" id="banana" name="banana" value="With Banana" onChange={handleChange} />
               
           </li>
           <li>
                 With Mango  
                 <input className="nav__filtersList-item" type="checkbox" id="mango" name="mango" value="With Mango" onChange={handleChange} />
                
           </li>
           <li>
                 With Chocolate  
                  <input className="nav__filtersList-item" type="checkbox" id="chocolate" name="chocolate" value="With Chocolate" onChange={handleChange} />
                  
           </li>
           <li>
                 With Coffee  
                 <input className="nav__filtersList-item" type="checkbox" id="coffe" name="coffe" value="With Coffee" onChange={handleChange} />
                
           </li>
           
        </ul>        
        </>
    )
}

export default FiltersList
