import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
    Header,
    // Mobile,
    Footer,
    Home,
    SingleItem,
    About,
    TopBar
} from './pages/imports'

const App = () => {
    return (
        <Router>
            <div id="master-wrapper">
                <TopBar />
                <div id="wrapper">
                    <div className="sub-wrapper">
                        <Header />
                        {/* <Mobile /> */}
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="product/:id" element={<SingleItem />} />
                            <Route path="about" element={<About />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </div>
        </Router>
    )
}

export default App