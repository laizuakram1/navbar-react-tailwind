import React from 'react';

const PriceOption = (props) => {
    const {name, price} = props.route;
    return (
        <div className='mt-8 bg-white p-5 rounded-lg'>
            <h2 className='text-3xl bg-blue-300 p-3 rounded-lg'>{name}</h2>
            <p>{price}</p>
            
        </div>
    );
};

export default PriceOption;