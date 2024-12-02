import { Fragment, useState, useEffect } from "react";
import Logo from '../../components/logo/Logo';
import NavBar from '../../components/NavBar/NavBar';
import Btn from '../../components/Btn/Btn';
import MobileMenu from "../../components/NavBar/MobileMenu";
import MainSearch from "../../components/NavBar/MainSearch";
import './Header.css';

const Header = () => {
    const [ofcanvasShow, setOffcanvasShow] = useState(false);
    const onCanvasHandler = () => {
        setOffcanvasShow(prev => !prev);
    }
    
    const [searchbarShow, setSearchbarShow] = useState(false);
    const onSearchHandler = () => {
        setSearchbarShow(prev => !prev);
    }

    const [scroll, setScroll] = useState(0);
    const [headerTop, setHeaderTop] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // New state for menu open/close

    useEffect(() => {
        const header = document.querySelector(".header-section");
        setHeaderTop(header.offsetTop);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const handleClick = () => {
        setIsMenuOpen(prev => !prev); // Toggle menu open state
        onCanvasHandler(); // Toggle mobile menu display
    };

    return (
        <Fragment>
            <div className={`header-section header-transparent sticky-header section ${scroll > headerTop ? "is-sticky" : ""}`}>
                <div className="header-inner">
                    <div className="container-fluid position-relative hero">
                        <div className="menu-parent">
                            <div className="col-xl-2 col-auto order-0">
                                <Logo
                                    image={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                                />
                            </div>
                            <div className="order-1 order-xl-1 blow">
                                <NavBar isOpen={isMenuOpen} /> {/* Pass the isOpen state to NavBar */}
                            </div>

                            <div className="col-xl-2 col d-none d-sm-flex justify-content-end order-2 order-xl-2 zero">
                                <div id="buy">
                                    <Btn name='Start a Conversation' />
                                </div>
                            </div>
                            <div className="menu-icon order-3" onClick={handleClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler} />
            <MainSearch show={searchbarShow} onClose={onSearchHandler} />
        </Fragment>
    );
}

export default Header;
