import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
    Header,
    // Mobile,
    Footer,
    Home,
    Women,
    SingleItem,
    WomenSingleItem,
    About,
    Contact,
    Products
} from './pages/imports'

const App = () => {
    return (
        <Router>
            <div className="top-bar-container">
                <div className="inner-top-bar-container">
                    <p className="top-info">FREE delivery, FREE returns and FREE remake (if shoes don't fit)</p>
                </div>
            </div>
            <div className="master-wrapper">
                <div className="wrapper">
                    <div className="sub-wrapper">
                        <Header />
                        {/* <Mobile /> */}
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="women" element={<Women />} />
                            <Route path="product/:id" element={<SingleItem />} />
                            <Route path="women/product/:id" element={<WomenSingleItem />} />
                            <Route path="products" element={<Products />} />
                            <Route path="about" element={<About />} />
                            <Route path="contact" element={<Contact />} />
                        </Routes>
                    </div>
                </div>
            </div>
            <Footer />
        </Router>
    )
}

export default App