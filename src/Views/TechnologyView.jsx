import {getTechnology} from "../api.js";
import {Await, useLoaderData} from "react-router-dom";
import {Suspense, useEffect, useState} from "react";

export async function TechLoader({params}) {
    return {technology: getTechnology(params?.id || '')}
}

export default function TechnologyView() {
    const loaderData = useLoaderData();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function resizeEvt() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', resizeEvt);
        return () => {
            removeEventListener('resize', resizeEvt);
        };
    }, []);

    function renderTechDetails(data) {
        const {name, description, images} = data;
        const imgUrl = windowWidth > 900 ? images?.landscape : images?.portrait;
        return (
            <>
                <article>
                    <header className={'txt-caps'}>
                        <h1>the terminology...</h1>
                        <h2>{name}</h2>
                    </header>
                    <p>{description}</p>
                </article>
                <figure>
                    <img src={`/src/${imgUrl}`} alt={`An image of ${name}`} aria-label={`An image of our ${name}`}/>
                </figure>
            </>)
    }

    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Await resolve={loaderData?.technology}>
                {renderTechDetails}
            </Await>
        </Suspense>)
}