
import React, {useState} from 'react';

import menu from '../../Assets/images/menu-icon.png'

import settings from '../../Assets/images/settings-icon.png'

import './Nav.scss';
import SettingsMenu from '../../Components/SettingsMenu/SettingsMenu';
import NavMenu from '../../Components/NavMenu/NavMenu';

const Nav = (props) => {

   

    const { userName, handleSubmit } = props;

    console.log("In Nav");

    const [ searchTerm, setSearchTerm ] = useState("");
    const [ isChecked, setIsChecked ] = useState(false);
    const [ showSettings, setShowSettings ] = useState(false);
    const [ showNav, setShowNav ] = useState(false);
    
    

    const handleInput = event => {
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput);
    }

    console.log("in nav search "+searchTerm);

    const handleChange = event => {
        setIsChecked( !isChecked )
    }

    const toggleSettings = () => {
        setShowSettings( !showSettings )
    }


    return (

        <>
            <div class="nav__main">
    
             <img src={menu} className="nav__item nav__item--menu" alt="menu icon" />
             <h2 className="nav__heading">Healthy Cocktails</h2>
             <img src={settings} className="nav__item" alt="settings icon" onClick={toggleSettings} />
        

            </div>
             <nav className="nav">
            

            { showSettings && <SettingsMenu userName={userName} toggleSettings={toggleSettings} handleSubmit={handleSubmit} />}
            { <NavMenu searchTerm={searchTerm} handleInput={handleInput} handleChange={handleChange} />}

           
        </nav>
        </>
    )
}

export default Nav
