import { useEffect, useState } from 'react';
import styles from './ArtFeed.module.scss';
import DOMPurify from 'dompurify';
import LoadingIndicator from './LoadingIndicator.js';
import loadingStatus from '../helpers/loadingStatus.js'

function useFetchData(url: string) {
    const [data, setData] = useState([]);
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);
    
    // .then/.catch is promised based
    // try/catch with async/await is more readable and easier to handle multiple async operations
    useEffect(() => {
        setLoadingState(loadingStatus.isLoading);
        fetch(url)
            .then(res => res.json())
            .then(json => { setData(json); setLoadingState(loadingStatus.loaded); })
            .catch(() => setLoadingState(loadingStatus.hasErrored));
    }, [url]);
    return { data, loadingState };
}

export default function ArtFeed() {
    const { data, loadingState } = useFetchData('https://eg-collection-server-89ee5d23663f.herokuapp.com/');
    return (
        <section className={styles.artItems}>
            <ul>
                {loadingState === loadingStatus.isLoading ? <LoadingIndicator loadingState={loadingState} /> : '' } {/* This is a conditional rendering expression in React */}
                {/* === is the strict equality operator. It checks that both value and type are the same. */}
                {data.map((item: any) => (
                    <li
                        draggable={true}
                        key={item._id}
                        title={item.createdAt}
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.pixelCode) }}
                    />
                ))}
            </ul>
        </section>
    );
}