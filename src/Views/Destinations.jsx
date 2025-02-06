import {Await, useLoaderData} from "react-router-dom";
import {Suspense} from "react";
import {getDestination} from "../api.js";
import ImagesWrapper from "../Components/ImagesLoader.jsx";
import MoonWebp from "../assets/destination/image-moon.webp";
import MarsWebp from "../assets/destination/image-mars.webp";
import TitanWebp from "../assets/destination/image-titan.webp";
import EuropaWebp from "../assets/destination/image-europa.webp";

export async function DestinationLoader({params}) {
    return {destination: getDestination(params?.id || '')};
}

export default function Destinations() {
    const loaderData = useLoaderData();
    const imgUrl = (destinationName) => {

        switch (destinationName.toLowerCase()) {
            case 'moon':
                return MoonWebp;
            case 'mars':
                return MarsWebp;
            case 'titan':
                return TitanWebp;
            case 'europa':
                return EuropaWebp;
        }
    }

    function renderDetails(data) {
        const {name, distance, travel, description} = data;

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
                <ImagesWrapper src={imgUrl(name)} alt={`A satellite image of ${name}`}
                               aria-label={`A satellite image of ${name}`}/>
            </>);
    }

    return (
        <Suspense fallback={<h1>Loading....</h1>}>
            <Await resolve={loaderData?.destination}>{renderDetails}</Await>
        </Suspense>
    )
}