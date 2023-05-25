import Image from "next/image";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <>
      <header className={styles.headerContainer}>
        <Image src="../assets/images/logo.svg" alt="" width={121} height={33} />
        <nav className="">
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </nav>
        <div>
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </header>
    </>
  );
};
