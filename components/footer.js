import Logo from "./logo"
import styles from "styles/footer.module.css";
import Container from "@/components/container"
import Social from "@/components/social";

export default function Footer () {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo/>
          <Social iconSize="30px"/>
        </div>
      </Container>
    </footer>
  )
}
