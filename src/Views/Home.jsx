import {Link} from "react-router-dom";

export default function Home() {
    return (
        <>
            <section className={'hero-section'}>
                <h1 className={'barlow-regular condensed'}>So, you want to travel to
                    <div className={'bellefair-regular heading-lg'}>Space</div>
                </h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!
                </p>
            </section>
            <Link className={'bellefair-regular'} to={'destinations'}>Explore</Link>
        </>
    )
}