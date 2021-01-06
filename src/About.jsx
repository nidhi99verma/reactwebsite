import React from 'react';
import { NavLink } from 'react-router-dom';
import abouts from '../src/images/abouts.svg';
import Common from './Common';

const About = () => {

    return (
        <>
            <Common
                name='Welcom to About page'
                imgsrc={abouts}
                visit='/contact'
                btname='Contact Now'
            />
        </>
    );

}

export default About;