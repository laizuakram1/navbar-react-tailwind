import React from 'react';
import PriceOption from '../priceOption/PriceOption';

const Pricing = () => {
    const routes = [
        {id:1, name:'Free', price:0},
        {id:1, name:'Regular', price:9.99},
        {id:1, name:'Premium', price:19.99},
    ]
    return (
        <div className='grid grid-cols-3 gap-4 bg-blue-300 p-5'>
            {
                routes.map(route => <PriceOption 
                key = {route.id}
                route = {route}
                ></PriceOption>)
            }
        </div>
    );
};

export default Pricing;