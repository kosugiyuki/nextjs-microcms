import { useState } from 'react'
import styles from 'styles/nav.module.css'
import Link from 'next/link'

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }
  const closeNav = () => {
    setIsNavOpen(false)
  }
  return (
    <nav className={isNavOpen ? styles.open : styles.close}>
      <button className={styles.btn} onClick={toggleNav}>MENU</button>
      <ul className={styles.list}>
        <li>
          <Link href="/">
            <a onClick={closeNav}>HOME</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a onClick={closeNav}>ABOUT</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a onClick={closeNav}>BLOG</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
