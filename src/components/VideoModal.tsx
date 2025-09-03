import styles from './VideoModal.module.scss';

interface videoProps {
    src: string;
}

export default function VideoModal({ src }: videoProps) { // Update VideoModal to accept src as prop. Then go up the component chain and keep adding the src prop all the way to the App.tsx file. You have to chain this prop all the way to the top of the App.tsx which uses it in the Project component
    return (
        <>
            <section className={styles.modalVideo}>
                <video src={src} width="470" height="540" controls></video><a>Close</a>
            </section>
        </>
    )
}