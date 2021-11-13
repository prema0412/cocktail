
import React from 'react'

import whiteCross from '../../Assets/images/white-cross.png'
import profilePicture from '../../Assets/images/profile3.jpg'
import './SettingsMenu.scss'

import Button from '../../Components/Button/Button'

const SettingsMenu = (props) => {

    const { userName, toggleSettings, handleSubmit } = props;
    return (
        <div>
            <div className="settings-menu__content">
            <img src={whiteCross} alt="Close menu" className="nav-menu__cross" onClick={toggleSettings} />
                 <img src={profilePicture} alt="profile" className="settings-menu__profile" />
                 <h2 className="settings-menu__title">Hi {userName}</h2>
                  <form className="settings-menu__form" onSubmit={handleSubmit}>
                      <label htmlFor="firstName">First name</label>
                      <input type="text" name="firstName" className="settings-menu__input" />
                      <label htmlFor="lastName">Last name</label>
                     <input type="text" name="lastName" className="settings-menu__input" />
                     <Button isSecondary={true} buttonText={"Save"} />
                 </form>
             </div>
            
        </div>
    )
}

export default SettingsMenu ;
