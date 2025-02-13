import {Outlet, useLocation} from "react-router-dom";
import Header from "./Header.jsx";
import {useEffect, useState} from "react";
import Skeleton from "react-loading-skeleton";

export default function Layout() {
    const location = useLocation();
    const path = location.pathname.split('/')[1];
    const [title, setTitle] = useState(null);
    useEffect(() => {
        switch (path) {
            case 'destinations':
                setTitle(<h1><span className={'grey-txt fw-500'}>01</span>PICK YOUR DESTINATION</h1>);
                return;
            case 'crews':
                setTitle(<h1><span className={'grey-txt fw-500'}>02</span>MEET YOUR CREW</h1>)
                return;
            case 'technology':
                setTitle(<h1><span className={'grey-txt fw-500'}>03</span>SPACE LAUNCH 101</h1>)
                return;
            default:
                return;
        }
    }, [path]);
    return (<>
        <Header/>
        <main className={'main'}>
            <article className={`${path ? path : 'hero'}-article`}>
                {path && <header className={'header-main'}>{title ||
                    <Skeleton baseColor={'hsl(230, 35%, 7%)'} highlightColor={'#979797'} style={{
                        width: 'min(80%,400px)',
                        height: '1.65em',
                        marginBottom: '1em',
                    }}/>}
                </header>}
                <Outlet/>
            </article>
        </main>
    </>)
}