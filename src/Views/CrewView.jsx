import {Await, useLoaderData} from "react-router-dom";
import {Suspense, useRef, useState} from "react";
import Pagination from "../Components/Pagination.jsx";
import {getCrews} from "../api.js";
export async function crewLoader(){
    return {crews: await getCrews()}
}

export default function CrewView() {
    const loaderData = useLoaderData();
    const sliderRef = useRef(null);
    const wrapperRef = useRef(null);
    const slidesRef = useRef([]);
    const [slideCount, setSlideCount] = useState(0);
    const [slideIndex, setSlideIndex] = useState(1);


    function RenderCrews(data) {
        let activeIdx = slideIndex - 1;
        return (data.map((items, idx) => {
            const {bio, images, name, role, id} = items;
            return (
                <li key={id} className={`${activeIdx === idx ? 'active fade' : ''}`}
                    style={{display: `${activeIdx !== idx ? "none" : ''}`}}
                    ref={el => slidesRef.current[idx] = el}>
                    <article className={'crew-content'}>
                        <div className={'info-wrapper'}>
                            <h2>{role}</h2>
                            <h3>{name}</h3>
                            <p>{bio}</p>
                        </div>
                        <figure className={'img-wrapper'}>
                            <img src={`/src/${images?.webp || png}`} alt={`an image of ${name}`}/>
                        </figure>
                    </article>
                </li>)
        }))

    }

    return (
        <div ref={wrapperRef} id={'slider-wrapper'}>
            <ul ref={sliderRef}
                onLoad={() => {
                    slideCount === 0 && setSlideCount(sliderRef.current.children.length);
                }}
                style={{width: `calc(100dvw * ${slideCount})`}}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Await resolve={loaderData?.crews}>
                        {RenderCrews}
                    </Await>
                </Suspense>
            </ul>
            <Pagination count={slideCount} idx={slideIndex} setSlideIdx={setSlideIndex} />
        </div>)
}