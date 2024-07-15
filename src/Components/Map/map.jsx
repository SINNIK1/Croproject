import React from 'react';
import { VectorMap } from '@react-jvectormap/core';
import {inMill} from '@react-jvectormap/india';

const Map = () => {
    return (
        <div> 
        <VectorMap map={inMill}
        backgroundColor="#282c34" />
        </div>
    )
}

export default Map