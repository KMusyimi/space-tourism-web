import {useRouteError} from "react-router-dom";
import spaceSvg from './../assets/shared/space-ship.svg'

export default function Error() {
    const err = useRouteError();
    // name message stack
    return (<div className={'err-container'}>
        <figure>
            <img src={`${spaceSvg}`} alt={`space ship image`}/>
        </figure>
        <div>
            <h1>Error failed request: {err.name}</h1>
            <p>{err.message}</p>
            {err.statusText && <pre>{err.status} - {err.statusText}</pre>}
        </div>
    </div>)
}