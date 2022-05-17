import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import logo from "../public/logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image src={logo} alt="logo" width={140} height={140}></Image>
      </Link>
      <Link href="/contact">Contacto</Link>
    </div>
  );
}
