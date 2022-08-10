import styles from "styles/contact.module.css";
import Social from "components/social";
export default function Contact ({ children }) {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social iconSize="2.4rem"/>
      <address>cube@web.mail.address</address>
    </div>
  )
}
