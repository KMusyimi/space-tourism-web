import {Await, useLoaderData} from "react-router-dom";
import {Suspense, useState} from "react";
import imageName from "../utils.js";
import {getCrew} from "../api.js";

export async function crewLoader({params}) {
    return {crew: getCrew(params.id)}
}


export default function CrewView() {
    const loaderData = useLoaderData();
    const [imageSrc, setImageSrc] = useState(null);

    const loadImages = async (imageName) => {
        const image = await import(`./../assets/crew/${imageName}.webp`);
        return image.default;
    };

    function RenderCrewInfo(data) {
        const {bio, images, name, role} = data;
        loadImages(imageName(images.webp)).then(setImageSrc);
        return (<>
            <article className={'crew-content'}>
                <header className={'bellefair-regular txt-caps'}>
                    <h1 className={'role grey-txt'}>{role}</h1>
                    <h2 className={'name'}>{name}</h2>
                </header>
                <p className={'bio'}>{bio}</p>
            </article>
            <figure className={'img-wrapper'}>
                <img src={`${imageSrc}`} alt={`an image of ${name}`}/>
            </figure>
        </>)

    }

    return (
        <Suspense fallback={<div>Loading</div>}>
            <Await resolve={loaderData?.crew}>{RenderCrewInfo}</Await>
        </Suspense>)
}