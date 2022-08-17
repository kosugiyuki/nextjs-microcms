import styles from "styles/hero.module.css";
import Image from "next/image";
import topKv from "images/topKv.png"

export default function Hero ({title, subtitle, imageOn = false}) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
        {imageOn && (
          <figure className={styles.image}>
            <Image
              src={topKv}
              alt=""
              layout="responsive"
              priority
              placeholder="blur"
              sizes="(min-width:1152px) 576px, (min-width:768px) 50vw, 100vw"
            />
          </figure>
        )}
    </div>
  )
}
