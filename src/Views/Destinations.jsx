import {Await, useLoaderData} from "react-router-dom";
import {Suspense, useState} from "react";
import {getDestination} from "../api.js";
import imageName from "../utils.js";

export async function DestinationLoader({params}) {
    return {destination: getDestination(params?.id || '')};
}

const loadImage = async (imageName) => {
    const image = await import(imageName);
    console.log(image);
    return image.default;
};

export default function Destinations() {
    const loaderData = useLoaderData();
    const [imageSrc, setImageSrc] = useState(null);

    function renderDetails(data) {
        const {name, images, distance, travel, description} = data;
        loadImage(`./../assets/destination/${imageName(images.webp)}.webp`).then(setImageSrc);
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
                <figure>
                    <img src={`${imageSrc}`} alt={`A satellite image of ${name}`}
                         aria-label={`A satellite image of ${name}`}/>
                </figure>
            </>);
    }

    return (
        <Suspense fallback={<h1>Loading....</h1>}>
            <Await resolve={loaderData?.destination}>{renderDetails}</Await>
        </Suspense>
    )
}