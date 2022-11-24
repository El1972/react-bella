import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BsHandbag } from "react-icons/bs";
import { FaHome, FaChevronDown } from 'react-icons/fa';
import { useAddToCartContext } from '../context/add_to_cart_context';
import { useProductsContext } from '../context/products_context';
import SingleItem from '../pages/SingleItem';
import { getConfig } from '@testing-library/react';
import { motion, AnimatePresence } from 'framer-motion'




const Modal = (props) => {

    const { id, images, names, count, prices, stock, amount } = props

    console.log(count);

    const { sizes, addToCart } = useAddToCartContext();

    const [setSize, setSetSize] = useState(sizes)


    return (
        <div>
            <div className="modal-browser-wrapper">
                <div className="inner-modal-browser-wrapper">

                    <div className="modal-window-measure">
                        <div className="modal-window-qualities-position">

                            <div className="modal-window-position-container">

                                {/* Blocks Of Buttons Inside Of Window */}


                                {/* First: Block Of Add To Cart Buttons */}
                                <div className="buttons-container">
                                    <div className="inner-buttons-container">

                                        <div className="modal-single-info-size-container">
                                            <Link to={'.'}
                                                className="modal-single-info-size-button"
                                            >
                                                <p className='modal-single-info-size'>
                                                    Size
                                                </p>
                                            </Link>
                                        </div>

                                        <div className="modal-single-info-cart-container">
                                            <Link to={'/products'} className="modal-single-info-cart-button"
                                                onClick={() => addToCart(id, images, names, count, prices, stock, amount, setSize)}
                                            >
                                                <p className='modal-single-info-cart'>
                                                    <BsHandbag className='modal-cart-icon' />Add To Cart
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* End Of First: Block Of Add To Cart Buttons */}


                                {/* 1 */}
                                {/* Second: Block Of Countries Buttons */}
                                <div className="countries-container clearfix">
                                    <div className="inner-countries-container">
                                        {/* <button onClick={() => coordinate(setSize, 'uk')}>uk</button> */}
                                        {/* <button onClick={() => coordinate('eu')}>eu</button> */}
                                    </div>
                                </div>
                                {/* End Of Second: Block Of Countries Buttons */}



                                {/* 2 */}
                                {/* Third: Block Of Countries Buttons */}
                                <div className="sizes-container clearfix">
                                    <div className="inner-sizes-container">
                                        {sizes.map((s, index) => {
                                            return (
                                                <AnimatePresence key={index}>
                                                    <motion.button key={index}
                                                        className={`size-button ${s === setSize ? ' active' : null}`}
                                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        onClick={() => setSetSize(s)}
                                                    >
                                                        {s.us}
                                                    </motion.button>
                                                </AnimatePresence>
                                            )
                                        })}
                                    </div>
                                </div>
                                {/* End Of Third: Block Of Countries Buttons */}



                                {/* Fourth: Block Of Countries Buttons */}
                                <div className="size-heading-container clearfix">
                                    <div className="inner-size-heading-container">
                                        <h4>Choose Your size:</h4>
                                    </div>
                                </div>
                                {/* End Of Fourth: Block Of Countries Buttons */}

                                {/* Fifth: Block Of Countries Buttons */}
                                <div className="what-my-size-container clearfix">
                                    <div className="inner-what-my-size-container">
                                        <span className='what-my-size'>What's my size?</span>
                                    </div>
                                </div>
                                {/* End Of Fifth: Block Of Countries Buttons */}

                                {/* Sixth: Block Of Countries Buttons */}
                                <div className="what-go-home-container clearfix">
                                    <div className="inner-what-go-home-container">

                                        <Link to={'/'} className="go-home-sentence-button">
                                            <p className='go-home-sentence'>
                                                <FaHome className='go-home' />
                                                Go Back
                                            </p>
                                        </Link>

                                    </div>
                                </div>
                                {/* End Of Sixth: Block Of Countries Buttons */}

                                {/* Blocks Of Buttons Inside Of Window */}

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal