import MainLogo from '../assets/shared/space-logo.svg'
import {Link, NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import Nav from "./Nav.jsx";

export default function Header() {
    const [toggled, setToggled] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    useEffect(() => {
        const body = document.querySelector('body');

        function resizeEvt() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', resizeEvt);

        toggled && windowWidth < 768 ? body.style.position = 'fixed' : body.style.position = '';
        toggled && body.scrollTo({top: 0, behavior: 'smooth'});

        return () => {
            removeEventListener('resize', resizeEvt);
        };
    }, [toggled, windowWidth]);


    return (
        <header className={'header'}>
            <Link to={'/'} className={'header-logo'}>
                <img className={'logo'} src={`${MainLogo}`} alt={'space logo image'}
                     aria-label={'a circle logo with a white background and a transparent star in the middle'}/>
                <span className={'line'}></span>
            </Link>
            {windowWidth < 768 && <button className={`menu-btn ${toggled && windowWidth < 768 ? 'open' : ''}`}
                                          onClick={() => {
                                              setToggled(prevToggle => !prevToggle);

                                          }}
                                          aria-label={'Main Menu button'}>
                <svg viewBox="0 0 100 100" style={{width: '35px', height: '32px'}}>
                    <path className="line line1"
                          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"/>
                    <path className="line line2" d="M 20,50 H 80"/>
                    <path className="line line3"
                          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"/>
                </svg>
            </button>}
            <Nav className={`main-nav ${toggled && windowWidth < 768 ? 'open' : ''}`}>
                <li className={'nav-item'}><NavLink to={'/'} ><span
                    className={`fw-500`}>00</span>Home</NavLink></li>
                <li className={'nav-item'}><NavLink to={'destinations'}
                             ><span
                    className={`fw-500`}>01</span>Destination</NavLink>
                </li>
                <li className={'nav-item'}><NavLink to={'crews'}
                             ><span
                    className={`fw-500`}>02</span>Crew</NavLink></li>
                <li className={'nav-item'}><NavLink to={'technology'}
                             ><span
                    className={`fw-500`}>03</span>Technology</NavLink>
                </li>
            </Nav>
        </header>);
}