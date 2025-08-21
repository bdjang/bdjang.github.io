import { useEffect, useState } from "react";
import styles from './ArtFeed.module.scss'

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
                <li dangerouslySetInnerHTML={{ __html: item.pixelCode }} />
            ))}
        </ul>
    );
}