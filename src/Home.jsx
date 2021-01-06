import React from 'react';
import { NavLink } from 'react-router-dom';
import homes from '../src/images/homes.svg';
import Common from './Common';

const Home = () => {

    return (
        <>
            <Common
                name='Grow your business with'
                imgsrc={homes}
                visit='/service'
                btname='Get Started'
            />
        </>
    );

}

export default Home;