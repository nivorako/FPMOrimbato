import React from 'react';

import ScrollToTop from '../../ScrollToTop';
import ScrollToTest from './ScrollToTest';

import './Anciens.css';

function Anciens() {
    return (
        <div>
            <ScrollToTop />
            <div className='anciens'>
                Ici les anciens
            </div>
            <ScrollToTest />
        </div>
        
    )
}

export default Anciens;
