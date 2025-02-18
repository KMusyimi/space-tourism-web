import {Link} from "react-router-dom";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import {FaExternalLinkAlt} from "react-icons/fa";

export default function NotFound() {
    return (
        <div className='not-found-container' style={{paddingBlock: '4em'}}>
            <div className='not-found' style={{textAlign: 'center'}}>
                <SkeletonTheme baseColor="#09122C" highlightColor="#ECEBDE">
                    <Skeleton width={'100%'} height={'100%'} style={{marginBottom: '2em'}}/>
                </SkeletonTheme>
                <h1 className='fw-700' style={{marginBottom: '1em'}}>Sorry, the page you were looking for was not
                    found.</h1>
                <p></p>
                <Link className='fw-700' to={'/'} style={{textDecoration: 'underline'}}>Return to
                    homepage <FaExternalLinkAlt /></Link>
            </div>
        </div>
    );
}