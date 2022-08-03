import React from 'react'

const Header = () => {
    return (
        <div>
            <div className="image-frame">
                <div className="image-shoes">
                    <img src='./../images/men_shoes_hero.jpeg' alt="" />
                </div>
            </div>

            <div className="width-header">
                <div className="structure-header">
                    <div className="lines-header">
                        <div className="properties-header">
                            <ul className='header-links'>
                                <li>Men's Shoes</li>
                                <li>Women's Shoes</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header