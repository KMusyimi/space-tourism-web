import Nav from "./Nav.jsx";
import {NavLink} from "react-router-dom";

export default function Pagination() {
    const activeStyles = {
        backgroundColor: 'var(--white)'
    }
    return (
        <Nav>
            <li><NavLink to={'.'} className={'dot'} style={({isActive}) => isActive ? activeStyles : {}}
                         end></NavLink></li>
            <li><NavLink to={'UOMgox2Dh63XHaj8EWD7'} className={'dot'}
                         style={({isActive}) => isActive ? activeStyles : {}}></NavLink></li>
            <li><NavLink to={'YHkk2083YmzlWuI95qc8'} className={'dot'}
                         style={({isActive}) => isActive ? activeStyles : {}}></NavLink></li>
            <li><NavLink to={'79hoc5vnjRiKZZBpnEEr'} className={'dot'}
                         style={({isActive}) => isActive ? activeStyles : {}}></NavLink></li>
        </Nav>
    )
}