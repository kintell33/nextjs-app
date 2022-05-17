import styles from '../styles/Title.module.css'

export default function Title({children}:any) {
    return (<div className={styles.container}>
        {children}
    </div>)
}