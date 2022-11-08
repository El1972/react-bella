import React from 'react'
import { useFiltersContext } from '../context/filters_context'
import { FaChevronDown } from 'react-icons/fa';
import { Sidebar } from './imports'
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { motion, AnimatePresence } from 'framer-motion'

//  - 855

const Home = () => {

    let { filtered_items } = useFiltersContext();

    return (
        <div>
            <div className="main-header-wrapper">
                <div className="inner-main-header-wrapper">
                    <div className="header-container">
                        <h1 className='about-header'>Men's Shoes</h1>
                    </div>
                </div>
                <div className="sub-header-container">
                    <p className='sub-header-itself'>
                        Home<FaChevronDown className='chevron-right' />
                        Men's Shoes</p>
                </div>
            </div>
            <Hero />
            <div className="general-wrapper clearfix">
                <Sidebar />
                {
                    filtered_items.map((i, index) => {
                        const { id, images, bestsellers, names, prices } = i
                        return (
                            <div className="image-container" key={index}>
                                <div className='image-width' key={id}>
                                    <Link to={`product/${i.id}`}>
                                        <AnimatePresence>
                                            <motion.div
                                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                whileHover={{ scale: 1.2 }}
                                                className="image-float">
                                                <div className="image-properties">
                                                    <div className='shoes-images'>
                                                        <div className="shoe-container">
                                                            <img src={`../../images/${images}`}
                                                                alt="" className='shoe-one' />
                                                        </div>
                                                        <div className="image-info-container">
                                                            <p className='image-bestsellers'>{bestsellers}</p>
                                                            <p className='image-names'>{names}</p>
                                                            <p className='image-prices'>${prices}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home




// names, images, descriptions, prices, discounts, bestsellers, colors,
//     designers