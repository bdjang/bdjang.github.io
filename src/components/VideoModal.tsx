import styles from './VideoModal.module.scss';

interface videoProps {
    src: string;
    setSelectedProject: (project: any) => void; // TypeScript function type definition; takes in one argument called project (of type any) and returns nothing
}

export default function VideoModal({ src, setSelectedProject }: videoProps) { // Update VideoModal to accept src as prop. Then go up the component chain and keep adding the src prop all the way to the App.tsx file. You have to chain this prop all the way to the top of the App.tsx which uses it in the Project component
    return (
        <>
            <section
                tabIndex={0}
                className={styles.modalVideo}
                onKeyDown={(e) => {
                    if (e.key == 'Escape') {
                        setSelectedProject(null);
                    }
                }}>
                <a onClick={() => setSelectedProject(null)}>Close</a> {/* React event handler that calls setSelectedProject function with null as argument and resets selected project state in parent component */}
                {typeof src === 'string' && src.includes('graffiti') ? <video src={src} width="478" height="540" controls></video> : <video src={src} width="750" height="500" controls></video>}
            </section>
        </>
    )
}