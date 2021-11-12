
import React, {useState} from 'react';

import menu from '../../Assets/images/menu-icon.png'

import settings from '../../Assets/images/settings-icon.png'

import './Nav.scss';
import SettingsMenu from '../../Components/SettingsMenu/SettingsMenu';
import NavMenu from '../../Components/NavMenu/NavMenu';

const Nav = (props) => {

   

    const { userName, handleSubmit, searchTerm, handleInput } = props;

    console.log("In Nav");

    const [ isChecked, setIsChecked ] = useState(false);
    const [ showSettings, setShowSettings ] = useState(false);
    const [ showNav, setShowNav ] = useState(true);
    


    console.log("in nav search "+searchTerm);

    const handleChange = event => {
        setIsChecked( !isChecked )
    }

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
             <h2 className="nav__heading">Welcom to Prema's Cocktail Gallery</h2>
             <img src={settings} className="nav__item" alt="settings icon" onClick={toggleSettings} />
        

            </div>
             <nav className="nav">
            

            { showSettings && <SettingsMenu userName={userName} toggleSettings={toggleSettings} handleSubmit={handleSubmit} />}
            { showNav && <NavMenu searchTerm={searchTerm} handleChange={handleChange} handleInput={handleInput}/>}

           
        </nav>
        </>
    )
}

export default Nav
