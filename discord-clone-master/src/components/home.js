import React from 'react';
import Nav from './Home/nav';
import HomeBody from './Home/body';
import HomeBtns from './Home/home_btns';

const Home = () => {
    return(
        <div id='home-div'>
            <Nav/>
            <HomeBody/>
            <HomeBtns/>
        </div>
    )
}

export default Home;