import {Outlet, useLocation} from "react-router-dom";
import Header from "./Header.jsx";

export default function Layout() {
    const location = useLocation();
    const path = location.pathname.split('/')[1];

    function RenderTitle() {
        switch (path) {
            case 'destinations':
                return (<h1><span className={'grey-txt fw-500'}>01</span>PICK YOUR DESTINATION</h1>);
            case 'crews':
                return (<h1><span className={'grey-txt fw-500'}>02</span>MEET YOUR CREW</h1>);
            case 'technology':
                return (<h1><span className={'grey-txt fw-500'}>03</span>SPACE LAUNCH 101</h1>);
            default:
                return;
        }

    }

    return (
        <>
            <Header/>
            <main className={'main'}>
                <article className={`${path ? path : 'hero'}-article`}>
                    {path && <header className={'header-main'}><RenderTitle/></header>}
                    <Outlet/>
                </article>
            </main>
        </>)
}