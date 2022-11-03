import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaChevronDown, FaHeart, FaShoppingBag } from 'react-icons/fa';
import { BsHandbag } from "react-icons/bs";
import { useProductsContext } from '../context/products_context';
import { useAddToCartContext } from '../context/add_to_cart_context';
import Modal from '../components/Modal';
import { Heart, Message, Pencil, QuestionIcon } from './imports';

// 25 - 0, 34 - 3(1029px)(900), 33 - 3

const SingleItem = () => {

    const { single_product: items, fetchSingleProduct } = useProductsContext()
    const { descriptions } = useAddToCartContext()

    const [modalOpen, setModalOpen] = useState(false)



    // Getting the id to appropriate item in an array of items

    const { id } = useParams()

    useEffect(() => {
        fetchSingleProduct(`${id}`)
    }, [id])

    const data = items.find((p) => {
        return p.id === id
    })

    const info = descriptions.find((p) => {
        return p.id === id
    })

    const { id: identity, names, images, prices, crossed_price } = data || undefined || {}

    const { id: calling, name, description,
        one, two, three, four, five, six } = info || undefined || {}

    // End of getting the id to appropriate item in an array of items




    // Fetching all the properties for a single item

    const { id: unit, prices: values, amount, stock } = items;

    // End of fetching all the properties for a single item


    const mouseOver = () => {
        let questionText = "Hello dear"
        return questionText
    }


    return (
        <div>
            <div className="general-single-container">
                <div className="general-single">

                    <div className="main-header-wrapper">
                        <div className="inner-main-header-wrapper">
                            <div className="header-container">
                                <h1 className='about-header'>{names}</h1>
                            </div>
                        </div>
                        <div className="sub-header-container">
                            <p className='sub-header-itself'>
                                Italy<FaChevronDown className='chevron-right' />
                                France<FaChevronDown className='chevron-right' />
                                London<FaChevronDown className='chevron-right' />
                                Tokyo<FaChevronDown className='chevron-right' />
                                New York</p>
                        </div>
                    </div>

                    <div className="single-image-top-line-container">
                        <Link to={'/'} className="back-to-list-button">
                            <FaChevronDown className='chevron-left' />
                            <p className='single-image-top-line'>Back To List</p>
                            <div className="single-image-top-line-itself"></div>
                        </Link>
                    </div>

                    <div className='single-image'>
                        <div className='single-image-container'>
                            <div className="single-image-inner-container clearfix">
                                <div className="single-image-width">
                                    <div className="single-image-properties">
                                        <img src={`../../images/${images}`}
                                            alt="" className='single-image-shoe'
                                        />
                                    </div>
                                </div>
                                <div className="single-info-width">
                                    <div className="single-info-properties">
                                        <div className="price-size-cart-bar">
                                            <div className="inner-price-size-cart-bar">

                                                <div className="single-info-price-container">
                                                    <p className='single-info-price'>${prices}</p>
                                                    <p className='crossed-price'>${crossed_price}</p>
                                                </div>


                                                <div className="single-info-cart-container">
                                                    <Link to={'.'} onClick={() => setModalOpen(true)}>
                                                        <p className='single-info-cart'>
                                                            <BsHandbag className='cart-icon' />Add To Cart
                                                        </p>
                                                    </Link>
                                                </div>

                                                {/* <div className="single-info-size-container"> */}
                                                <div className='single-info-size-button'
                                                    onClick={() => setModalOpen(true)}>
                                                    <p className='single-info-size'>
                                                        Size
                                                    </p>
                                                    {modalOpen && <Modal />}
                                                </div>
                                                {/* </div> */}


                                            </div>
                                            <div className="manufacture-container">
                                                <div className="inner-manufacture-container">
                                                    <span className='manufacture'>Manufacturing and FREE delivery to</span>
                                                    <span className='usa'>
                                                        United States
                                                        <div className="pencil-container">
                                                            <Pencil />
                                                        </div>
                                                    </span>
                                                    <span className='couple-of-weeks'>
                                                        in 1-2 weeks
                                                        <div
                                                            className="question-icon-container">
                                                            <QuestionIcon />
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="border"></div>
                                            <div className="product-actions">
                                                <div className="inner-product-actions">
                                                    <span className='save-wishlist'>
                                                        <div className="heart-container">
                                                            <Heart className='heart' data-heart="moo" />
                                                        </div>
                                                        Save to wishlist
                                                    </span>
                                                    <span className='send-inquiry'>
                                                        <div className="message-container">
                                                            <Message className='message' />
                                                        </div>
                                                        Send inquiry
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="middle-border"></div>

                                            <div className="description-wrapper">
                                                <ul className='description-block'>
                                                    <li className='description'>Description</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-info-text-container">
                                        <div className="inner-single-info-text-container">
                                            <p className='single-info-description'>{description}</p>
                                            <ul className='single-info-text'>
                                                <li className='single-info-text-one'>{one}</li>
                                                <li className='single-info-text-two'>{two}</li>
                                                <li className='single-info-text-three'>{three}</li>
                                                <li className='single-info-text-four'>{four}</li>
                                                <li className='single-info-text-five'>{five}</li>
                                                <li className='single-info-text-six'>{six}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleItem

