import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BsHandbag } from "react-icons/bs";
import { FaHome, FaChevronDown } from 'react-icons/fa';
import { useAddToCartContext } from '../context/add_to_cart_context';
import { useProductsContext } from '../context/products_context';
import SingleItem from '../pages/SingleItem';
import { getConfig } from '@testing-library/react';




const WomenModal = () => {

    const { women_single_product: women_items, womenfetchSingleProduct } = useProductsContext()


    const { id } = useParams()

    useEffect(() => {
        womenfetchSingleProduct(`${id}`)
    }, [id])

    const data = women_items.find((p) => {
        return p.id === id
    })


    const { id: identity, names, images, prices, descriptions } = data || undefined || {}

    const { sizes, womanAddToCart } = useAddToCartContext();

    const [setSize, setSetSize] = useState(sizes)


    // const [bob, setBob] = useState(sizes[0])

    // console.log(setSize);

    // console.log(sizes);




    // useEffect(() => {
    //     if (setSize.us) {
    //         delete setSize.uk && delete setSize.eu
    //         let me = setSize;
    //         delete me.id
    //         setSetSize(me)
    //     } else if (setSize.uk) {
    //         delete setSize.us && delete setSize.eu
    //         let me = setSize;
    //         delete me.id
    //         setSetSize(me)
    //     } else {
    //         delete setSize.us && delete setSize.uk
    //         let me = setSize;
    //         delete me.id
    //         setSetSize(me)
    //     }
    // }, [setSize])



    // const coordinate = (setSize, countries) => {


    //     let get_size = setSize.map((m) => m[countries])
    //     if (countries === 'uk') {
    //         return (
    //             <Mon pop={setSetSize(get_size)}></Mon>


    //         )
    //     }
    // if (countries === 'us') {
    //     return (
    //         <Mon>
    //             <button>{setSetSize(get_size)}</button>
    //         </Mon>
    //     )
    // }
    // if (countries === 'eu') {
    //     return (
    //         <Mon>
    //             <button>{setSetSize(get_size)}</button>
    //         </Mon>
    //     )
    // }
    // setSetSize(countries)

    // }


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
                                                onClick={() => womanAddToCart(identity, names, images, setSize, prices, descriptions, data)}
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
                                                <button key={index}
                                                    className={`size-button ${s === setSize ? ' active' : null}`}
                                                    onClick={() => setSetSize(s)}
                                                >
                                                    {s.us}
                                                </button>
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
        </div >
    )
}

export default WomenModal