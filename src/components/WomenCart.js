import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAddToCartContext } from '../context/add_to_cart_context'
import WomanItemDelete from './WomanItemDelete'
import WomenCountButtons from './WomenCountButtons'


const WomenCart = ({ id, names, images, prices, count, size }) => {

    const { woman_cart, emptyCart, adjustWomenCart, deleteWomanProduct } = useAddToCartContext();

    if (woman_cart.length < 1) {
        return <h3>Your Shopping Cart Is Empty</h3>
    }

    const increase = () => {
        adjustWomenCart(id, 'increase') // adjustCart() - is being called from here
    }

    const decrease = () => {
        adjustWomenCart(id, 'decrease') // adjustCart() - is being called from here
    }
    return (
        <div>
            <div>
                <div className="main-container clearfix">
                    <div className="inner-main-container">

                        <div className="image-section">
                            <div className="inner-image-section">
                                <img src={`../../images/${images}`}
                                    alt="pop" className='checkout-image' />
                            </div>
                        </div>
                        <div className="info-section">
                            <div className="inner-info-section">
                                <div className="info-wrapper">
                                    <span className='info-name'>{names}</span><br />
                                    <span className='info-size'>Size: {size}</span><br />
                                </div>
                            </div>
                        </div>

                        <div className="quantity-section">
                            <div className="inner-quantity-section">
                                <WomenCountButtons
                                    count={count}
                                    increase={increase}
                                    decrease={decrease}
                                />
                            </div>
                        </div>
                        <div className="delete-section">
                            <div className="inner-delete-section">
                                <Link to={'.'} onClick={() => deleteWomanProduct(id)}>
                                    <WomanItemDelete />
                                </Link>
                            </div>
                        </div>

                        <div className="new-price-section">
                            <div className="new-inner-price-section">
                                <span className='new-price'>${prices}.00</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    )
}


export default WomenCart