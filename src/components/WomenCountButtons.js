import React from 'react'
import { useAddToCartContext } from '../context/add_to_cart_context'

const WomenCountButtons = ({ count, increase, decrease }) => {

    return (
        <div>
            <div className="increase-descrease-container clearfix">
                <div className="inner-increase-descrease-container">
                    <button onClick={decrease} className="descrease-button">-</button>
                    {count}
                    <button onClick={increase} className="increase-button">+</button>
                </div>
            </div>
        </div>
    )
}

export default WomenCountButtons