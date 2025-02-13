import {NavLink, Outlet} from "react-router-dom";
import Nav from "./Nav.jsx";

export default function TechLayout() {
    const activeStyles = {
        backgroundColor: 'var(--white)',
        color: 'var(--blue-900)',
        border: 'transparent',
    }
    return (
        <div className={'tech-container'}>
            <Nav>
                <li><NavLink to={'.'} style={({isActive}) => isActive ? activeStyles : {}} end>1</NavLink></li>
                <li><NavLink to={'BmudOu45Cg9Wj3OBgGj4'}
                             style={({isActive}) => isActive ? activeStyles : {}}>2</NavLink></li>
                <li><NavLink to={'gr3DPxvs81j73QtggPPu'}
                             style={({isActive}) => isActive ? activeStyles : {}}>3</NavLink></li>
            </Nav>
            <Outlet/>
        </div>)
}