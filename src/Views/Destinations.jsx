import {Await, useLoaderData} from "react-router-dom";
import {Suspense} from "react";
import {getDestination} from "../api.js";
import Img from '../assets/destination/image-europa.png'

export async function DestinationLoader({params}) {
    return {destination: getDestination(params?.id || '')};
}

export default function Destinations() {
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
                <figure>
                    <img src={`${images?.webp.split('./')[1] || png}`} alt={`A satellite image of ${name}`}
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