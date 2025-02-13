import {useEffect, useState} from "react";
import Spinner from "./Spinner.jsx";
import imageName from "../utils.js";

const loadImage = async (imageName, dir, ext) => {
    ext = ext ? ext : "png";
    const image = await import(`./../assets/${dir}/${imageName}.${ext}`);
    return image.default;
}

export default function ImageComponent({dir, imageName, alt, ext, ...rest}) {
    const [imageSrc, setImageSrc] = useState(null);
    useEffect(() => {
        setTimeout(
            () => loadImage(imageName, dir, ext).then(setImageSrc), 500)

        return () => {
            setImageSrc(null);
        }
    }, [imageName]);
    return (imageSrc ? <img src={`${imageSrc}`} alt={alt} {...rest}/> : <Spinner/>)
}

export function PictureComponent({images, dir, alt, ext, ...rest}) {
    const [portraitSrc, setPortraitSrc] = useState(null);
    const [landscapeSrc, setLandscapeSrc] = useState(null);

    useEffect(() => {
        setTimeout(() => loadImage(imageName(images?.portrait), dir, ext).then(setPortraitSrc), 500);
        setTimeout(() => loadImage(imageName(images?.landscape), dir, ext).then(setLandscapeSrc), 500);

        return () => {
            setPortraitSrc(() => null);
            setLandscapeSrc(() => null);
        }
    }, [images]);

    function RenderPicture() {
        return (
            <picture>
                <source media={'(min-width: 1024px)'} srcSet={`${portraitSrc}`}/>
                <source media={'(min-width: 660px)'} srcSet={`${landscapeSrc}`}/>
                <img src={`${portraitSrc}`} alt={alt} {...rest}/>
            </picture>)
    }

    return (portraitSrc || landscapeSrc ? <RenderPicture/> : <Spinner/>)
}