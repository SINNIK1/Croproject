import React from 'react';
import './hero.css';
import StateTable from '../Statetable/statetable';
import Map from '../Map/map';
const Hero = () => {
    return (
        <div class = "hero"> 
            <div class = "leftbox">
                <strong>Map of India</strong>
                <Map/>
            </div>
            <div class = "rightbox">
                <strong>List of states in India</strong>
                <div class = "table" ><StateTable/></div>
            </div>
        </div>
    );
};

export default Hero;