import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

export function DestinationsSkeleton() {

    return (
        <SkeletonTheme baseColor="#09122C" highlightColor="#ECEBDE">
            <article className={'dest-content dest-content--skeleton'}>
                <Skeleton height={100} width={250}
                          style={{marginBottom: '1.25em'}}/>
                <Skeleton  className={'description'} height={150}
                          style={{marginBottom: '1.5em'}}/>
                <div>
                    <div>
                        <Skeleton height={'.65em'} width={'100%'} style={{marginBottom: '0.857em'}}/>
                        <Skeleton height={40} width={'100%'} style={{marginBottom: '0.857em'}}/>
                    </div>
                    <div>
                        <Skeleton height={'.65em'} width={'100%'} style={{marginBottom: '0.857em'}}/>
                        <Skeleton height={40} width={'100%'} style={{marginBottom: '0.857em'}}/>
                    </div>
                </div>
            </article>
            <figure>
                <Skeleton height={'100%'}
                          width={'100%'}
                          style={{borderRadius: '50%'}}/>
            </figure>
        </SkeletonTheme>
    )
}

export function CrewSkeleton() {
    return (
        <SkeletonTheme baseColor="#09122C" highlightColor="#ECEBDE">
            <article className={'crew-content crew-content--skeleton'}>
                <Skeleton height={35} width={245}
                          style={{marginBottom: '1.25em'}}/>
                <Skeleton height={55}
                          style={{marginBottom: '1.15em'}}/>
                <Skeleton height={175} className={'bio bio--skeleton'}
                          style={{marginBottom: '1.25em'}}/>
            </article>
            <figure>
                <Skeleton height={'100%'}
                          width={'100%'}
                          style={{borderRadius: '.25em'}}/>
            </figure>
        </SkeletonTheme>
    )
}

export function TechnologySkeleton() {
    return (
        <SkeletonTheme baseColor="#09122C" highlightColor="#ECEBDE">
            <article className={'tech-content tech-content--skeleton'}>
                <Skeleton height={55} width={245}
                          style={{marginBottom: '1.25em'}}/>
                <Skeleton height={85}
                          style={{marginBottom: '1.15em'}}/>
                <Skeleton height={225} className={'bio bio--skeleton'}
                          style={{marginBottom: '1.25em'}}/>
            </article>
            <figure>
                <Skeleton height={'100%'}
                          width={'100%'}
                          style={{borderRadius: '.25em'}}/>
            </figure>
        </SkeletonTheme>
    )
}