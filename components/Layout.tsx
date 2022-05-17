import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from '../styles/Layout.module.css'

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar></Navbar>
        <main className={styles.main}>{children}</main>
      <Footer></Footer>
    </>
  );
}
