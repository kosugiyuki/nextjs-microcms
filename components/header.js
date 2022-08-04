import Container from "@/components/container"
import Logo from "./logo";
import HeaderNav from "@/components/headerNav"
import styles from "styles/header.module.css";

export default function Header () {
  return (
    <header>
      <Container>
        <div className={styles.flexContainer}>
          <Logo boxOn/>
          <HeaderNav/>
        </div>
      </Container>
    </header>
  )
}
