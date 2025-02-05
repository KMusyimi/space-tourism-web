import {Await, NavLink, Outlet, useLoaderData} from "react-router-dom";
import {getDestinationIDs} from "../api.js";
import Nav from "./Nav.jsx";
import {Suspense} from "react";

export async function DestLayoutLoader() {
    return {destination: getDestinationIDs()};
}

export default function DestinationLayout() {
    const loaderData = useLoaderData();

    const activeStyles = {
        color: 'var(--white)'
    }

    function RenderNav(data) {
        let marsId, titanId, europaId;
        for (const item of data) {
            const {id, name} = item;
            !marsId && name === 'Mars' ? marsId = id : '';
            !titanId && name === 'Titan' ? titanId = id : '';
            !europaId && name === 'Europa' ? europaId = id : ''
        }


        return (
            <>
                <li><NavLink to={'.'} className={({isActive}) => isActive ? 'active' : ''}
                             style={({isActive}) => isActive ? activeStyles : {}} end>MOON
                </NavLink></li>
                <li><NavLink to={`${marsId}`} className={({isActive}) => isActive ? 'active' : ''}
                             style={({isActive}) => isActive ? activeStyles : {}}>MARS</NavLink></li>
                <li><NavLink to={`${europaId}`} className={({isActive}) => isActive ? 'active' : ''}
                             style={({isActive}) => isActive ? activeStyles : {}}>EUROPA</NavLink>
                </li>
                <li><NavLink to={`${titanId}`} className={({isActive}) => isActive ? 'active' : ''}
                             style={({isActive}) => isActive ? activeStyles : {}}>TITAN</NavLink></li>
            </>
        )
    }

    return (
        <>
            <div className={'dest-container'}>
                <Nav className={'dest-nav'}>
                    <ul>
                        <Suspense fallback={<h1>Loading...</h1>}>
                            <Await resolve={loaderData?.destination}>
                                {RenderNav}
                            </Await>
                        </Suspense>
                    </ul>
                </Nav>
                <Outlet/>
            </div>
        </>)
}