import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <>
      <nav className={styles.wrapNavbar}>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </nav>
    </>
  );
};
