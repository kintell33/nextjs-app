import styles from '../styles/InfoCentered.module.css'

export default function InfoCentered({children}:any) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}