import React from 'react';
import discord_logo from "../../assets/Images/icon.png";
import style from "../../assets/styles/home_style.css";

const Nav = () => {
    return(
        <nav>
            <div className="reload-home">
                <img id="home-nav-img" src={discord_logo}></img>
                <span>Discord</span>
            </div>
            <div className="infos">
                <a className='nav-div-a'>Download</a>
                <a className='nav-div-a'>Nitro</a>
                <a className='nav-div-a'>Safety</a>
                <a className='nav-div-a'>Support</a>
                <a className='nav-div-a'>Blog</a>
                <a className='nav-div-a'>Careers</a>
            </div>
            <div>
                <button className='login-btn'>
                    <a href='/login'>Login</a>
                </button>
            </div>
        </nav>
    )
}

export default Nav;