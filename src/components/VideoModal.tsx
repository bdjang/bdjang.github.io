import styles from './VideoModal.module.scss';
import egTutorial from '../videos/email-graffiti-tutorial.mp4';
import deaTutorial from '../videos/djang-email-art-tutorial.mp4';

export default function VideoModal() {
    return (
        <>
            <section className={styles.modalVideo}>
                <video src={egTutorial} width="470" height="540" controls></video><a>Close</a>
            </section>
        </>
    )
}