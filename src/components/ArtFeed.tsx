import { useEffect, useState } from 'react';
import styles from './ArtFeed.module.scss';
import DOMPurify from 'dompurify';

function useFetchData(url: string) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => setData(json));
    }, [url]);
    return data;
}

export default function MyComponent() {
    const data = useFetchData('#');
    return (
        <ul>
            {data.map((item: any) => (
                <li key={item._id} title={item.createdAt} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.pixelCode) }} />
            ))}
        </ul>
    );
}