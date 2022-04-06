import axios from "axios";
import Head from "next/head";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import { useState } from "react";

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>PizzaLand</title>
        <meta name="description" content="The best pizza shop in town" />
      </Head>
      <Featured />
      {<AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}
export const getServerSideProps = async (context) => {
  const myCookie = context.req?.cookies || "";
  let admin = false;
  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }
  const res = await axios.get("http://localhost:3000/api/products");
  console.log(res);
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};
