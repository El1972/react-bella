import React from 'react'

const Sidebar = () => {
    return (
        <div id='sidebar-parent'>
            <div className="sidebar-float">
                <div className="sidebar-properties">
                    <div className="sidebar-items">
                        <div className="material-type">
                            <form action="">
                                <input type="radio" className='input-leather' /> Leather
                                <input type="radio" className='input-suede' /> Suede
                            </form>
                        </div>
                        <div className="laces-section" >
                            <form action="">
                                <input type="radio" className='input-laces' /> Laces
                                <input type="radio" className='input-lacesless' /> Laceless
                            </form>
                        </div>
                        <div className="price-section">
                            <form action="">
                                <select name="" id="" className='select-width'>
                                    <option value="">Select Price</option>
                                    <option value="">
                                        <span>From $500.00 to $100.00</span>
                                    </option>
                                    <option value="">
                                        <span>From $100.00 to $500.00</span>
                                    </option>
                                </select>
                            </form>
                        </div>
                        <div className="color-section">
                            <form action="">
                                <select name="" id="" className='select-width'>
                                    <option value="">Select Color</option>
                                    <option value="">
                                        <span>Black</span>
                                    </option>
                                    <option value="">
                                        <span>Brown</span>
                                    </option>
                                    <option value="">
                                        <span>Blue</span>
                                    </option>
                                    <option value="">
                                        <span>Red</span>
                                    </option>
                                </select>
                            </form>
                        </div>
                        <div className="designer-section">
                            <form action="">
                                <select name="" id="" className='select-width'>
                                    <option value="">Select Designer</option>
                                    <option value="">
                                        <span>Luigi Bertolli</span>
                                    </option>
                                    <option value="">
                                        <span>Francoi Mandell</span>
                                    </option>
                                    <option value="">
                                        <span>Anthony Raselli</span>
                                    </option>
                                    <option value="">
                                        <span>Giovanni Sollini</span>
                                    </option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar