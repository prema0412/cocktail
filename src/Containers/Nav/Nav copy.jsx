
import React, {useState} from 'react';

import menu from '../../Assets/images/menu-icon.png'

import settings from '../../Assets/images/settings-icon.png'

import './Nav.scss';
import SettingsMenu from '../../Components/SettingsMenu/SettingsMenu';
import NavMenu from '../../Components/NavMenu/NavMenu';

const Nav = (props) => {

    const [showSettings, setShowSettings] = useState(false);
    const [showNav, setShowNav] = useState(true);

    const { userName, handleSubmit, searchTerm, isCheckedBanana, isCheckedMango, isCheckedChocolate, isCheckedCoffee, handleChangeBanana, 
        handleChangeMango, handleChangeChocolate, handleChangeCoffee, handleInput } = props;



    const toggleSettings = () => {
        setShowSettings( !showSettings )
    }

    const toggleNav = () => {
        setShowNav( !showNav )
    }


    return (

        <>
            <div className="nav__main">
    
             <img src={menu} className="nav__item nav__item--menu" alt="menu icon" onClick={toggleNav}/>
             <h2 className="nav__heading">Welcome to Prema's Cocktail Gallery</h2>
             <img src={settings} className="nav__item" alt="settings icon" onClick={toggleSettings} />
        

            </div>
             <nav className="nav">
            

            { showSettings && <SettingsMenu userName={userName} toggleSettings={toggleSettings} handleSubmit={handleSubmit} />}
            { showNav && <NavMenu searchTerm={searchTerm} isCheckedBanana={isCheckedBanana} isCheckedMango={isCheckedMango} isCheckedCoffee={isCheckedCoffee} isCheckedChocolate={isCheckedChocolate} 
            handleChangeBanana={handleChangeBanana} handleChangeMango={handleChangeMango}
            handleChangeChocolate={handleChangeChocolate} handleChangeCoffee={handleChangeCoffee}
            handleInput={handleInput} toggleNav={toggleNav}/>}

           
        </nav>
        </>
    )
}

export default Nav
