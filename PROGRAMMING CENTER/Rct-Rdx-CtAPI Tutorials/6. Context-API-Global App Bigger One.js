
// context.js
import React, { useState, useContext } from 'react';
import sublinks from './data';


const AppContext = React.createContext();


const AppProvider = ({ children }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [page, setPage] = useState({ page: '', links: [] });
    const [location, setLocation] = useState({});


    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text);
        setPage(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    };

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };

    return (
        <AppContext.Provider
            value={{
                isSidebarOpen,
                openSidebar,
                closeSidebar,
                isSubmenuOpen,
                openSubmenu,
                closeSubmenu,
                page,
                location,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };










// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppProvider } from './context';
ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </React.StrictMode>,
    document.getElementById('root')
);









// App.js
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
function App() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Hero />
            <Submenu />
        </>
    );
}
export default App;










// Navbar.js
import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {

    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom - 3;
        openSubmenu(page, { center, bottom });
    };
    const handleSubmenu = (e) => {
        if (!e.target.classList.contains('link-btn')) {
            closeSubmenu();
        }
    };
    return (
        <nav className='nav' onMouseOver={handleSubmenu}>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} className='nav-logo' alt='' />
                    <button className='btn toggle-btn' onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>
                <ul className='nav-links'>
                    <li>
                        <button className='link-btn' onMouseOver={displaySubmenu}>
                            products
                        </button>
                    </li>
                    <li>
                        <button className='link-btn' onMouseOver={displaySubmenu}>
                            developers
                        </button>
                    </li>
                    <li>
                        <button className='link-btn' onMouseOver={displaySubmenu}>
                            company
                        </button>
                    </li>
                </ul>
                <button className='btn signin-btn'>Sign in</button>
            </div>
        </nav>
    );
};

export default Navbar;









// Sidebar.js
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
import sublinks from './data';
const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
    return (
        <div
            className={`${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
                }`}
        >
            <aside className='sidebar'>
                <button className='close-btn' onClick={closeSidebar}>
                    <FaTimes />
                </button>
                <div className='sidebar-links'>
                    {sublinks.map((item, index) => {
                        const { links, page } = item;
                        return (
                            <article key={index}>
                                <h4>{page}</h4>
                                <div className='sidebar-sublinks'>
                                    {links.map((link, index) => {
                                        const { url, icon, label } = link;
                                        return (
                                            <a key={index} href={url}>
                                                {icon}
                                                {label}
                                            </a>
                                        );
                                    })}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;









// Submenu.js
import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
    const {
        isSubmenuOpen,
        page: { page, links },
        location,
    } = useGlobalContext()
    const container = useRef(null)
    const [columns, setColumns] = useState('col-2')
    useEffect(() => {
        setColumns('col-2')
        const submenu = container.current
        const { center, bottom } = location
        submenu.style.left = `${center}px`
        submenu.style.top = `${bottom}px`
        console.log(links)
        if (links.length === 3) {
            setColumns('col-3')
        }
        if (links.length > 3) {
            setColumns('col-4')
        }
    }, [page, location, links])
    return (
        <aside
            className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
            ref={container}
        >
            <section>
                <h4>{page}</h4>
                <div className={`submenu-center ${columns}`}>
                    {links.map((link, index) => {
                        const { url, icon, label } = link
                        return (
                            <a key={index} href={url}>
                                {icon}
                                {label}
                            </a>
                        )
                    })}
                </div>
            </section>
        </aside>
    )
}

export default Submenu









// Hero.js
import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';

const Hero = () => {
    const { closeSubmenu } = useGlobalContext();
    return (
        <section className='hero' onMouseOver={closeSubmenu}>
            <div className='hero-center'>
                <article className='hero-info'>
                    <h1>
                        Payments infrastructure <br />
                        for the internet
                    </h1>
                    <p>
                        Millions of companies of all sizes—from startups to Fortune 500s—use
                        Stripe’s software and APIs to accept payments, send payouts, and
                        manage their businesses online.
                    </p>
                    <button className='btn'>Start now</button>
                </article>
                <article className='hero-images'>
                    <img src={phoneImg} className='phone-img' alt='phone' />
                </article>
            </div>
        </section>
    );
};

export default Hero;










// data.js
import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
    {
        page: 'products',
        links: [
            { label: 'payment', icon: <FaCreditCard />, url: '/products' },
            { label: 'terminal', icon: <FaCreditCard />, url: '/products' },
            { label: 'connect', icon: <FaCreditCard />, url: '/products' },
        ],
    },
    {
        page: 'developers',
        links: [
            { label: 'plugins', icon: <FaBook />, url: '/products' },
            { label: 'libraries', icon: <FaBook />, url: '/products' },
            { label: 'help', icon: <FaBook />, url: '/products' },
            { label: 'billing', icon: <FaBook />, url: '/products' },
        ],
    },
    {
        page: 'company',
        links: [
            { label: 'about', icon: <FaBriefcase />, url: '/products' },
            { label: 'customers', icon: <FaBriefcase />, url: '/products' },
        ],
    },
];

export default sublinks;









// index.css
/*
===============
Variables
===============
*/

// :root {
//     /* dark shades of primary color*/
//     --clr-primary-1: hsl(205, 86%, 17%);
//     --clr-primary-2: hsl(205, 77%, 27%);
//     --clr-primary-3: hsl(205, 72%, 37%);
//     --clr-primary-4: hsl(205, 63%, 48%);
//     /* primary/main color */
//     --clr-primary-5: hsl(205, 78%, 60%);
//     /* lighter shades of primary color */
//     --clr-primary-6: hsl(205, 89%, 70%);
//     --clr-primary-7: hsl(205, 90%, 76%);
//     --clr-primary-8: hsl(205, 86%, 81%);
//     --clr-primary-9: hsl(205, 90%, 88%);
//     --clr-primary-10: hsl(205, 100%, 96%);
//     /* darkest grey - used for headings */
//     --clr-grey-1: hsl(209, 61%, 16%);
//     --clr-grey-2: hsl(211, 39%, 23%);
//     --clr-grey-3: hsl(209, 34%, 30%);
//     --clr-grey-4: hsl(209, 28%, 39%);
//     /* grey used for paragraphs */
//     --clr-grey-5: hsl(210, 22%, 49%);
//     --clr-grey-6: hsl(209, 23%, 60%);
//     --clr-grey-7: hsl(211, 27%, 70%);
//     --clr-grey-8: hsl(210, 31%, 80%);
//     --clr-grey-9: hsl(212, 33%, 89%);
//     --clr-grey-10: hsl(210, 36%, 96%);
//     --clr-white: #fff;
//     --clr-red-dark: hsl(360, 67%, 44%);
//     --clr-red-light: hsl(360, 71%, 66%);
//     --clr-green-dark: hsl(125, 67%, 44%);
//     --clr-green-light: hsl(125, 71%, 66%);
//     --clr-black: #222;
//     --transition: all 0.3s linear;
//     --spacing: 0.1rem;
//     --radius: 0.25rem;
//     --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
//     --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
//     --max-width: 1170px;
//     --fixed-width: 620px;
//   }
//   /*
//   =============== 
//   Global Styles
//   ===============
//   */

//   *,
//   ::after,
//   ::before {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
//   body {
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
//       Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//     background: var(--clr-grey-10);
//     color: var(--clr-grey-1);
//     line-height: 1.5;
//     font-size: 0.875rem;
//   }
//   ul {
//     list-style-type: none;
//   }
//   a {
//     text-decoration: none;
//   }
//   h1,
//   h2,
//   h3,
//   h4 {
//     letter-spacing: var(--spacing);
//     text-transform: capitalize;
//     line-height: 1.25;
//     margin-bottom: 0.75rem;
//   }
//   h1 {
//     font-size: 3rem;
//   }
//   h2 {
//     font-size: 2rem;
//   }
//   h3 {
//     font-size: 1.25rem;
//   }
//   h4 {
//     font-size: 0.875rem;
//   }
//   p {
//     margin-bottom: 1.25rem;
//     color: var(--clr-grey-5);
//   }
//   @media screen and (min-width: 800px) {
//     h1 {
//       font-size: 4rem;
//     }
//     h2 {
//       font-size: 2.5rem;
//     }
//     h3 {
//       font-size: 1.75rem;
//     }
//     h4 {
//       font-size: 1rem;
//     }
//     body {
//       font-size: 1rem;
//     }
//     h1,
//     h2,
//     h3,
//     h4 {
//       line-height: 1;
//     }
//   }
//   /*  global classes */

//   /* section */
//   .section {
//     width: 90vw;
//     margin: 0 auto;
//     max-width: var(--max-width);
//   }

//   @media screen and (min-width: 992px) {
//     .section {
//       width: 95vw;
//     }
//   }

//   /*
//   =============== 
//   Stripe Styles
//   ===============
//   */
//   .nav {
//     height: 5rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background: transparent;
//     position: relative;
//     z-index: 1;
//   }
//   .nav-center {
//     width: 90vw;
//     max-width: var(--max-width);
//   }
//   .nav-header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }
//   .btn {
//     font-size: 1rem;
//     padding: 0.25rem 0.75rem;
//     border-radius: var(--radius);
//     border-color: transparent;
//     color: white;
//     background: var(--clr-black);
//     cursor: pointer;
//     transition: var(--transition);
//   }
//   .btn:hover {
//     background: var(--clr-grey-5);
//   }
//   .nav-links {
//     display: none;
//   }
//   .signin-btn {
//     display: none;
//   }
//   .hero::before {
//     content: '';
//     position: absolute;
//     width: 100%;
//     height: 65%;
//     top: 0;
//     left: 0;
//     background: url(./images/hero.svg);
//     background-size: cover;
//     background-repeat: no-repeat;
//     z-index: -1;
//   }
//   .hero {
//     position: relative;
//     min-height: 100vh;
//     margin-top: -5rem;
//     display: grid;
//     grid-template-columns: 1fr;
//     justify-items: center;
//   }
//   .hero-center {
//     width: 90vw;
//     max-width: var(--max-width);
//     display: grid;
//     align-items: center;
//   }

//   .hero-info h1 {
//     text-transform: none;
//     max-width: 500px;
//     margin-bottom: 2rem;
//   }
//   .hero-info p {
//     max-width: 35em;
//     line-height: 1.8;
//   }
//   .hero-images {
//     display: none;
//   }

//   /* nav media query */
//   @media screen and (min-width: 800px) {
//     .nav-center {
//       display: grid;
//       grid-template-columns: auto 1fr auto;
//       align-items: center;
//     }
//     .toggle-btn {
//       display: none;
//     }
//     .signin-btn {
//       display: inline-block;
//     }
//     .nav-links {
//       display: block;
//       justify-self: center;
//       display: grid;
//       grid-template-columns: 1fr 1fr 1fr;
//       text-align: center;
//       height: 100%;
//       display: grid;
//       align-items: center;
//     }
//     .nav-links li {
//       height: 100%;
//     }
//     .link-btn {
//       height: 100%;
//       background: transparent;
//       border-color: transparent;
//       font-size: 1.1rem;
//       color: white;
//       text-transform: capitalize;
//       letter-spacing: 1px;
//       width: 10rem;
//     }
//   }

//   /* hero media query */
//   @media screen and (min-width: 800px) {
//     .hero::before {
//       background-size: contain;
//       height: 100%;
//     }
//     .hero-center {
//       grid-template-columns: 2fr 1fr;
//     }

//     .hero-info h1 {
//       font-size: 3rem;
//     }
//     .hero-info p {
//       font-size: 1.25rem;
//     }
//     .hero-images {
//       display: block;
//       justify-self: center;
//     }
//     .phone-img {
//       width: 12rem;
//     }
//   }

//   @media screen and (min-width: 1200px) {
//     .hero-center {
//       grid-template-columns: 2fr 1fr;
//       align-items: end;
//       padding-bottom: 12vh;
//     }
//     .hero-info h1 {
//       max-width: 100%;
//       font-size: 5.5rem;
//     }
//     .hero-images {
//       align-self: end;
//     }
//     .phone-img {
//       width: 15rem;
//     }
//   }
//   @media screen and (min-width: 1400px) {
//     .hero-center {
//       padding-bottom: 20vh;
//     }
//     .phone-img {
//       width: 17rem;
//     }
//   }

//   /* sidebar */
//   .sidebar-wrapper {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     display: grid;
//     place-items: center;
//     visibility: hidden;
//     z-index: -1;
//     transition: var(--transition);
//     transform: scale(0);
//     background: rgba(0, 0, 0, 0.5);
//   }
//   .sidebar-wrapper.show {
//     visibility: visible;
//     z-index: 2;
//     transform: scale(1);
//   }
//   .sidebar {
//     width: 90vw;
//     height: 95vh;
//     max-width: var(--fixed-width);
//     background: var(--clr-white);
//     border-radius: var(--radius);
//     box-shadow: var(--dark-shadow);
//     position: relative;
//     padding: 4rem 2rem;
//   }
//   .close-btn {
//     font-size: 2rem;
//     background: transparent;
//     border-color: transparent;
//     color: var(--clr-grey-5);
//     position: absolute;
//     top: 1rem;
//     right: 1rem;
//     cursor: pointer;
//   }
//   .sidebar article {
//     margin-bottom: 2rem;
//   }
//   .sidebar-sublinks {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     row-gap: 0.25rem;
//   }
//   .sidebar-sublinks a {
//     display: block;
//     color: var(--clr-grey-1);
//     text-transform: capitalize;
//     display: flex;
//     align-items: center;
//   }
//   .sidebar-sublinks svg {
//     color: var(--clr-grey-5);
//     margin-right: 1rem;
//   }

//   @media screen and (min-width: 800px) {
//     .sidebar-wrapper {
//       display: none;
//     }
//   }

//   /* links */
//   .submenu {
//     background: var(--clr-white);
//     box-shadow: var(--dark-shadow);
//     position: absolute;
//     top: 4rem;
//     left: 50%;
//     transform: translateX(-50%);
//     z-index: 3;
//     display: none;
//     padding: 2rem;
//     border-radius: var(--radius);
//     transition: var(--transition);
//   }
//   .submenu::before {
//     content: '';
//     display: block;
//     width: 0;
//     height: 0;
//     border-left: 5px solid transparent;
//     border-right: 5px solid transparent;
//     border-bottom: 5px solid var(--clr-white);
//     position: absolute;
//     top: -5px;
//     left: 50%;
//     transform: translateX(-50%);
//   }

//   .submenu.show {
//     display: block;
//   }

//   .submenu-center {
//     display: grid;
//     gap: 0.25rem 2rem;
//   }
//   .col-2 {
//     grid-template-columns: repeat(2, 1fr);
//   }
//   .col-3 {
//     grid-template-columns: repeat(3, 1fr);
//   }
//   .col-4 {
//     grid-template-columns: repeat(4, 1fr);
//   }
//   .submenu h4 {
//     margin-bottom: 1.5rem;
//   }
//   .submenu-center a {
//     width: 10rem;
//     display: block;
//     color: var(--clr-grey-1);
//     text-transform: capitalize;
//     display: flex;
//     align-items: center;
//   }
//   .submenu-center svg {
//     color: var(--clr-grey-5);
//     margin-right: 1rem;
//   }
