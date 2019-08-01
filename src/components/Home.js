import React from 'react';

import BioStockHeader from './Header';
import CategoryGrid from './CategoryGrid';

export default function Home(){
    return (
        <div>
            <BioStockHeader/>
            {/* <CategoryButtonsGrid/> */}
            <CategoryGrid />
        </div>
       
    )
};

