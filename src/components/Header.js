import React from 'react'
import { FaHome, FaChevronDown, FaCartArrowDown } from 'react-icons/fa';
import { HiOutlineShoppingBag } from "@react-icons/all-files/hi/HiOutlineShoppingBag";
import { Link } from 'react-router-dom';
import ShoppingBagComponent from './ShoppingBagComponent';
import { useAddToCartContext } from '../context/add_to_cart_context';
import Hero from './Hero';

const Header = () => {

    const { both_carts_items_total } = useAddToCartContext()

    return (
        <div>
            <div className="login-cart-container clearfix">
                <div className="inner-login-cart-container">
                    <Link to={'./products'}>
                        <ShoppingBagComponent className="shopping-bag-component" />
                        <p className='cart-number'>{both_carts_items_total}</p>
                    </Link>
                </div>
            </div>
            <div className="brandname-container">
                <div className="inner-brandname-container">
                    <Link to={'./'}>
                        <h1 className='brandname-header-itself'>Bella</h1>
                    </Link>
                </div>
                <div className="brandname-sentence">
                    <p className='brandname-sentence-edit'>
                        One and Only</p>
                </div>

            </div>
            <div className="width-header">
                <div className="structure-header">
                    <div className="lines-header">
                        <div className="properties-header">
                            <ul className='header-links'>
                                <li className='nav-links hommer'><Link to='/' className='react-link-home'><i className='home-logo'><FaHome /></i></Link></li>
                                <li className='nav-links first'><Link to='/' className='react-link-home'>Men's Shoes<FaChevronDown className='chevron' /></Link></li>
                                <li className='nav-links'><Link to='/women' className='react-link'>Women's Shoes<FaChevronDown className='chevron' /></Link></li>
                                <li className='nav-links'><Link to='/about' className='react-link'>About Us</Link></li>
                                <li className='nav-links last'><Link to='/contact' className='react-link'>Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header