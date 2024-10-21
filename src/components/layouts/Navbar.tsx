import Link from "next/link";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.navbar}>
      <Link
        className={` ${pathname === "/" ? styles.link__active : styles.link}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={` ${
          pathname === "/about" ? styles.link__active : styles.link
        }`}
        href="/about"
      >
        About
      </Link>
      <Link
        className={`${
          pathname === "/products" ? styles.link__active : styles.link
        }`}
        href="/products"
      >
        Products
      </Link>
    </div>
  );
};

export default Navbar;
