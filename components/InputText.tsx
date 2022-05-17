import Label from "./Label";
import styles from '../styles/InputText.module.css'

export default function InputText({title}:any) {
    return (
        <div className={styles.container}>
            <Label>{title}</Label>
            <input type="text"></input>
        </ div>
    )
}