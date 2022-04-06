import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";
import Link from "next/link";
const PizzaCard = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <a>
          <Image src={pizza.img} alt={pizza.title} width="500" height="500" />
        </a>
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>$ {pizza.price[0]}</span>
      <p className={styles.desc}>{pizza.desc}</p>
    </div>
  );
};

export default PizzaCard;
