import Logo from "./logo";
import Link from "next/link";
import styles from "styles/headerNav.module.css";

export default function HeaderNav () {
  return (
    <>
      <nav className={styles.headerNav}>
        <ul>
          <li>
            <Link href="/">
              <a>HOME</a>
            </Link>
            </li>
            <li>
            <Link href="/about">
              <a>ABOUT</a>
            </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>BLOG</a>
              </Link>
            </li>
        </ul>
      </nav>
    </>
  )
}
