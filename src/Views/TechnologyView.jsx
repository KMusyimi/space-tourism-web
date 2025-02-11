import {getTechnology} from "../api.js";
import {Await, useLoaderData} from "react-router-dom";
import {Suspense, useEffect, useState} from "react";
import imageName from "../utils.js";

export async function TechLoader({params}) {
    return {technology: getTechnology(params.id)}
}

const loadImage = async (imageName) => {
    const image = await import(`./../assets/technology/${imageName}.jpg`);
    return image.default;
};

export default function TechnologyView() {
    const loaderData = useLoaderData();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [imageSrc, setImageSrc] = useState(null);


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
        const imgUrl = windowWidth >= 700 && windowWidth < 1024 ? images?.landscape : images?.portrait;
        loadImage(imageName(imgUrl)).then(setImageSrc);
        return (
            <>
                <article>
                    <header className={'txt-caps bellefair-regular '}>
                        <h1 className={'grey-txt'}>the terminology...</h1>
                        <h2>{name}</h2>
                    </header>
                    <p>{description}</p>
                </article>
                <figure>
                    <img src={`${imageSrc}`} alt={`An image of ${name}`} aria-label={`An image of our ${name}`}/>
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