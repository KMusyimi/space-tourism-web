import MainLogo from '../assets/shared/space-logo.svg'
import Nav from "./Nav.jsx";
import {Link, NavLink} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

export default function Header() {
    const [toggled, setToggled] = useState(false);
    const toggleBtnRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function resizeEvt() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', resizeEvt);

        const body = document.querySelector('body');
        toggled ? body.style.position = 'fixed' : body.style.position = '';
        toggled && body.scrollTo({top: 0, behavior: 'smooth'});

        return () => {
            removeEventListener('resize', resizeEvt);
        };
    }, [toggled]);

    return (<header className={'header'}>
        <Link to={'/'} className={'header-logo'}>
            <img className={'logo'} src={`${MainLogo}`} alt={'space logo image'}
                 aria-label={'a circle logo with a white background and a transparent star in the middle'}/>
            <div className={'line'}></div>
        </Link>
        {windowWidth < 768 && <button className={` menu-btn ${toggled && windowWidth < 768 ? 'open' : ''}`}
                                      onClick={() => {
                                          setToggled(prevToggle => !prevToggle)
                                      }}
                                      aria-label={'open and close menu button'}
                                      ref={toggleBtnRef}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </button>}
        <Nav className={`main-nav`}>
            <ul className={'nav-list'}>
                <li><NavLink to={'/'} className={({isActive}) => isActive ? 'nav-link--active' : 'nav-link'}><span
                    className={`fw-500`}>00</span>Home</NavLink></li>
                <li><NavLink to={'destinations'}
                             className={({isActive}) => isActive ? 'nav-link--active' : 'nav-link'}><span
                    className={`fw-500`}>01</span>Destination</NavLink>
                </li>
                <li><NavLink to={'crews'}
                             className={({isActive}) => isActive ? 'nav-link--active' : 'nav-link'}><span
                    className={`fw-500`}>02</span>Crew</NavLink></li>
                <li><NavLink to={'technology'}
                             className={({isActive}) => isActive ? 'nav-link--active' : 'nav-link'}><span
                    className={`fw-500`}>03</span>Technology</NavLink>
                </li>
            </ul>
        </Nav>
    </header>);
}