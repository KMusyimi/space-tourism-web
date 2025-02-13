import {Await, useLoaderData} from "react-router-dom";
import {Suspense} from "react";
import {getDestination} from "../api.js";
import imageName from "../utils.js";
import ImageComponent from "../Components/ImageComponent.jsx";
import {DestinationsSkeleton} from "../Components/SkeletonLoading.jsx";

export async function DestinationLoader({params}) {
    return {destination: getDestination(params?.id || '')};
}

export default function Destination() {
    const loaderData = useLoaderData();

    function renderDetails(data) {
        const {name, images, distance, travel, description} = data;
        return (
            <>
                <article className={'dest-content'}>
                    <h2 className={'heading-lg bellefair-regular'}>{name}</h2>
                    <p className={'description'}>{description}</p>
                    <div className={'statistics'}>
                        <div>
                            <p className={'barlow-regular condensed'}>avg. distance</p>
                            <p className={'bellefair-regular'}>{distance}</p>
                        </div>
                        <div>
                            <p className={'barlow-regular condensed'}>est. travel time</p>
                            <p className={'bellefair-regular'}>{travel}</p>
                        </div>
                    </div>
                </article>
                <figure className={'img-wrapper'}>
                    <ImageComponent
                        className={'dest-img'}
                        imageName={imageName(images.webp)}
                        dir={'destination'}
                        ext={'webp'}
                        alt={`A satellite image of ${name}`}
                        aria-label={`A satellite image of the ${name}`}/>
                </figure>
            </>);
    }

    return (
        <Suspense fallback={<DestinationsSkeleton/>}>
            <Await resolve={loaderData?.destination}>{renderDetails}</Await>
        </Suspense>
    )
}