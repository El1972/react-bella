
// context.js
import React, { useState, useContext } from 'react'


const AppContext = React.createContext();


const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <AppContext.Provider value={{
            isModalOpen,
            isSidebarOpen,
            openModal,
            openSidebar,
            closeModal,
            closeSidebar
        }}>
            {children}
        </AppContext.Provider>
    )
}

// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider }










// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { AppProvider } from './context'
import App from './App'



ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </React.StrictMode>,
    document.getElementById('root')
)










// App.js
import React from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
function App() {
    return (
        <>
            <Home />
            <Modal />
            <Sidebar />
        </>
    )
}

export default App










// Home.js
import React /* ,{ useContext } */ from 'react'
import { FaBars } from 'react-icons/fa'
import { /* AppContext, */ useGlobalContext } from './context'


const Home = () => {
    // const data = useContext(AppContext);
    const { openSidebar, openModal } = useGlobalContext();

    return <main>
        <button className="sidebar-toggle" onClick={openSidebar}>
            <FaBars />
        </button>
        <button className="btn" onClick={openModal}>
            show modal
    </button>
    </main>
}

export default Home












// Modal.js
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'


const Modal = () => {
    const { isModalOpen, closeModal } = useGlobalContext();

    return (
        <div
            className={`${isModalOpen ? 'modal-overlay show-modal' :
                'modal-overlay'
                }`}
        >
            <div className="modal-container">
                <h3>modal content</h3>
                <button className="close-modal-btn" onClick=
                    {closeModal}>
                    <FaTimes />
                </button>
            </div>
        </div>
    )
}

export default Modal













// Sidebar.js
import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './context'


const Sidebar = () => {

    const { isSidebarOpen, closeSidebar } = useGlobalContext();


    return <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className="sidebar-header">
            <img src={logo} className="logo"
                alt="coding addict" />
            <button className="close-btn" onClick={closeSidebar}>
                <FaTimes />
            </button>
        </div>
        <ul className="links">
            {links.map((l) => {
                const { id, url, text, icon } = l;
                return (
                    <li key={id}>
                        <a href={url}>
                            {icon}
                            {text}
                        </a>
                    </li>
                )
            })}
        </ul>
        <ul className="social-icons">
            {social.map((m) => {
                const { id, url, icon } = m;
                return (
                    <li key={id}>
                        <a href={url}>
                            {icon}
                        </a>
                    </li>
                )
            })}
        </ul>
    </aside>
}

export default Sidebar
