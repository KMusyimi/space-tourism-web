import {getTechnology} from "../api.js";
import {Await, useLoaderData} from "react-router-dom";
import {Suspense} from "react";
import {PictureComponent} from "../Components/ImageComponent.jsx";
import {TechnologySkeleton} from "../Components/SkeletonLoading.jsx";

export async function TechLoader({params}) {
    return {technology: getTechnology(params.id)}
}


export default function Technology() {
    const loaderData = useLoaderData();

    function renderTechDetails(data) {
        const {name, description, images} = data;
        return (<>
            <article className={'tech-content'}>
                <header className={'txt-caps bellefair-regular '}>
                    <h1 className={'grey-txt'}>the terminology...</h1>
                    <h2>{name}</h2>
                </header>
                <p className={'description'}>{description}</p>
            </article>
            <figure className={'image-wrapper'}>
                <PictureComponent images={images}
                                  dir={'technology'}
                                  ext={'jpg'}
                                  alt={`An image of ${name}`}
                                  aria-label={`Our ${name} technology`}/>
            </figure>
        </>)
    }

    return (
        <Suspense fallback={<TechnologySkeleton/>}>
            <Await resolve={loaderData?.technology}>
                {renderTechDetails}
            </Await>
        </Suspense>)
}