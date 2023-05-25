"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import { Navbar } from "../../components/commons/Navbar";

export const Header = () => {
  return (
    <>
      <header className={styles.Header + " container"}>
        <Image src="../assets/images/logo.svg" alt="" width={121} height={33} />
        <Navbar />
        <div>
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </header>
    </>
  );
};
