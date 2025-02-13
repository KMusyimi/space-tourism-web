import {Await, useLoaderData} from "react-router-dom";
import {Suspense} from "react";
import imageName from "../utils.js";
import {getCrew} from "../api.js";
import ImageComponent from "../Components/ImageComponent.jsx";
import {CrewSkeleton} from "../Components/SkeletonLoading.jsx";

export async function crewLoader({params}) {
    return {crew: getCrew(params.id)}
}

export default function Crew() {
    const loaderData = useLoaderData();

    function RenderCrewInfo(data) {
        const {bio, images, name, role} = data;
        return (
            <>
                <article className={'crew-content'}>
                    <header className={'bellefair-regular txt-caps'}>
                        <h1 className={'role grey-txt'}>{role}</h1>
                        <h2 className={'name'}>{name}</h2>
                    </header>
                    <p className={'bio'}>{bio}</p>
                </article>
                <figure className={'img-wrapper'}>
                    <ImageComponent imageName={imageName(images.webp)}
                                    ext={'webp'}
                                    dir={'crew'}
                                    alt={`An image of ${name}`}
                                    aria-label={`Our ${role}, ${name}`}/>
                </figure>
            </>)
    }

    return (
        <Suspense fallback={<CrewSkeleton/>}>
            <Await resolve={loaderData?.crew}>{RenderCrewInfo}</Await>
        </Suspense>)
}