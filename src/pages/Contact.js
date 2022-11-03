import React from 'react'
import { FaChevronDown, FaPhoneAlt } from 'react-icons/fa';
import { BsLock, BsTruck, BsArrowRepeat, BsChatSquareText } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMapLocationDot, faPhoneAlt, faPhoneFlip, faPhoneSquare, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faPhoneCircle, faPhoneHangup, faPhoneIncoming, faPhoneLaptop, faPhoneMissed, faPhoneOffice, faPhonePlus, faPhoneRotary, faPhoneSquareDown } from '@fortawesome/sharp-solid-svg-icons';
import Phone from '../components/Phone';

const Contact = () => {
    return (
        <div>
            <div className="contact">
                <div className="contact-main-wrapper">

                    <div className="main-header-wrapper">
                        <div className="inner-main-header-wrapper">
                            <div className="header-container">
                                <h1 className='about-header'>Contact Us</h1>
                            </div>
                        </div>
                        <div className="sub-header-container">
                            <p className='sub-header-itself'>
                                Home<FaChevronDown className='chevron-right' />
                                We Answer</p>
                        </div>
                    </div>


                    <div className="telephone-address-container clearfix">

                        <div className="telephone-measure">
                            <div className="telephone-qualities">
                                <p className='call-us'>Call Us:
                                    {/* <div className="telephone-container">
                                        <i className="fa-thin fa-phone-rotary"></i>
                                    </div> */}
                                </p>
                                <div className="telephone-info">
                                    <p className='telephone-one'>+1 (210) 734-2158 US</p>
                                    <p className='telephone-two'>+44 20 2653 1836 UK</p>
                                    <p className='telephone-three'>(9:00 - 17:00 Monday - Friday)</p>
                                    <p className='telephone-four'>info@hammet.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="address-measure">
                            <div className="address-qualities">
                                <p className='address-us'>Address:
                                    {/* <div className="telephone-container">
                                        <i className="fa-thin fa-phone-rotary"></i>
                                    </div> */}
                                </p>
                                <div className="address-info">
                                    <p className='address-one'>6300 VESTAL ROAD, USA</p>
                                    <p className='address-two'>Vestal, NY 13620</p>
                                    <p className='address-three'>CHENANGO COUNTY</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="complaints-notice-measures">
                        <div className="complaints-notice-properties">
                            <p className='complaints-notice'> If you have any suggestions or complaints you can send them directly to our management team: </p><br />
                            <p className='complaints-notice-two'>management@bella.com</p>
                        </div>
                    </div>


                    <div className="form-container clearfix">
                        <div className="form-measure">
                            <div className="form-qualities">
                                <form className='contact-form'>
                                    <span className='contact-sign'>Contact Form:</span>
                                    <div className="input-style">
                                        <label htmlFor=""></label>
                                        <input type="text" placeholder='Name:'
                                            className='contact-input' /><br />
                                    </div>
                                    <div className="input-style">
                                        <label htmlFor=""></label>
                                        <input type="email" placeholder='Email:'
                                            className='contact-input' /><br />
                                    </div>
                                    <div className="input-style">
                                        <label htmlFor=""></label>
                                        <input type="phone" placeholder='Phone:'
                                            className='contact-input' /><br />
                                    </div>
                                    <div className="input-style">
                                        <label htmlFor=""></label>
                                        <textarea name="" id="" className='contact-textarea'
                                            cols="30" rows="10" style={{ resize: "none" }}></textarea>
                                    </div>
                                    <div className="button-container">
                                        <div className="button-style clearfix">
                                            <input type='submit' className='button' value='Send' />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="info-container clearfix">
                        <div className="payment-columns-measure">
                            <div className="payment-columns-qualities">
                                <i><BsLock className='lock' /></i>
                                <p className='columns'>Secure Payments in your <br /> Local Currency</p>
                            </div>
                        </div>
                        <div className="express-columns-measure">
                            <div className="express-columns-qualities">
                                <i><BsTruck className='truck' /></i>
                                <p className='columns'>Free Express Delivery <br /> over £50</p>
                            </div>
                        </div>
                        <div className="returns-columns-measure">
                            <div className="returns-columns-qualities">
                                <i><BsArrowRepeat className='returns' /></i>
                                <p className='columns'>International Returns <br /> & Exchanges</p>
                            </div>
                        </div>
                        <div className="contact-columns-measure">
                            <div className="contact-columns-qualities">
                                <i><BsChatSquareText className='contact-icon' /></i>
                                <p className='columns'>You Can Contact Us Anytime <br /> Anywhere</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div >

        </div >

    )
}

export default Contact