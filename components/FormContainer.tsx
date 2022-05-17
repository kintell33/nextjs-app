import Title from "./Title";
import styles from "../styles/FormContainer.module.css";

export default function FormContainer({ title, children }: any) {
  return (
    <>
      <Title>{title}</Title>
      <div className={styles.container}>{children}</div>
    </>
  );
}
