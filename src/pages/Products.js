import React from 'react'
import Cart from '../components/Cart'
import EmptyCartComponent from '../components/EmptyCartComponent'
import WomenCart from '../components/WomenCart'
import { useAddToCartContext } from '../context/add_to_cart_context'



const Products = () => {

    const { cart, woman_cart, emptyCart, both_carts_amounts_total } = useAddToCartContext()

    if (cart.length < 1 && woman_cart.length < 1) {
        return (
            <div>
                <div className="empty-cart-container">
                    <h3 className='empty-sign'>Your Shopping Cart Is Empty</h3>
                    <div className="inner-empty-cart-container">
                        <EmptyCartComponent />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="cart-parent-wrapper">
                <div className="inner-cart-parent-wrapper">

                    <div className="main-header-wrapper">
                        <div className="inner-main-header-wrapper">
                            <div className="cart-header-container">
                                <h1 className='about-header'>Cart</h1>
                            </div>
                        </div>
                    </div>

                    <div className="service-sign">
                        <p>If your shoes don't fit, we'll be happy to remake them FOR FREE</p>
                    </div>

                    <div className="conditions-sign">
                        <span> Free returns</span>
                        <span> Free remake</span>
                        <span>100% quality</span>
                    </div>

                    <div className="top-grey-bar-container">
                        <div className="inner-top-grey-bar-container">
                            <span className='product-name'>Product Name</span>
                            <span className='quantity'>Qty</span>
                            <span className='subtotal'>Subtotal</span>
                        </div>
                    </div>

                    <div className="main-checkout-section">
                        <div className="inner-main-checkout-section">
                            {/* here we are iterating over the cart object displaying
                        whatever items we have in the cart. But functionality
                        in each <Cart/> component is isolated from the other
                        <Cart/> component, and that's why when you click for
                        example on counter - & + buttons, they only increment
                        and decrement for that particular component */}
                            {cart.map((c) => {
                                console.log(c);
                                return (
                                    <div key={c.id}>
                                        <Cart key={c.id} {...c} />
                                    </div>
                                )
                            })}
                            {woman_cart.map((w) => {
                                return (
                                    <div key={w.id}>
                                        <WomenCart key={w.id} {...w} />
                                    </div>
                                )
                            })}
                            <div className="bottom-line"></div>
                            <div className="total-price-container clearfix">
                                <div className="inner-total-price-container">
                                    <h4 className='total-price'>
                                        Total Price:   ${both_carts_amounts_total}.00
                                    </h4>
                                </div>
                            </div>
                            <div className="clear-all-container clearfix">
                                <div className="inner-clear-all-container">
                                    <button onClick={() => emptyCart()}
                                        className="clear-all-button"
                                    >Clear All</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Products