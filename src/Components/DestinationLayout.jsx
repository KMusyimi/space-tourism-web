import {NavLink, Outlet} from "react-router-dom";
import Nav from "./Nav.jsx";


export default function DestinationLayout() {
    const activeStyles = {
        color: 'var(--white)'
    }

    return (
        <div className={'dest-container'}>
            <Nav className={'dest-nav'}>
                <li className={'nav-item'}>
                    <NavLink to={'.'}
                             style={({isActive}) => isActive ? activeStyles : {}} end>MOON
                    </NavLink></li>
                <li className={'nav-item'}><NavLink to={'WM4Eijbt3mwKz7haESiS'}
                             style={({isActive}) => isActive ? activeStyles : {}}>MARS</NavLink></li>
                <li className={'nav-item'}><NavLink to={'PRiG9D6Cd2MjF86ajjE9'}
                             style={({isActive}) => isActive ? activeStyles : {}}>EUROPA</NavLink>
                </li>
                <li className={'nav-item'}><NavLink to={'uZFGScdc04k6YfoKCXRW'}
                             style={({isActive}) => isActive ? activeStyles : {}}>TITAN</NavLink></li>
            </Nav>
            <Outlet/>
        </div>
    )
}