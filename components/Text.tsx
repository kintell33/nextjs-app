import styles from "../styles/Text.module.css";

export default function Text({ children }: any) {
  return <div className={styles.container}>{children}</div>;
}
