import Image from "next/image";
import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" alt="" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES,WE DID.THE PIZZA MANIA, WELL BAKED SLICE OF PIZZA
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            SARAY
            <br /> Absheron, 5000
            <br /> (994) 508976522
          </p>
          <p className={styles.text}>
            SARAY
            <br /> Absheron, 5000
            <br /> (994) 508976522
          </p>
          <p className={styles.text}>
            SARAY
            <br /> Absheron, 5000
            <br /> (994) 508976522
          </p>
          <p className={styles.text}>
            SARAY
            <br /> Absheron, 5000
            <br /> (994) 508976522
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY-SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
        <div></div> <h1></h1>
      </div>
    </div>
  );
};

export default Footer;
