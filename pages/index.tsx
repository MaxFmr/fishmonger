import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fishmonger App </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>
        Votre Appli d'animation commerciale pour la traçabilité des produits de
        la mer.
      </h1>

      <footer className={styles.footer}>
        <span className={styles.logo}>Developped by KERLIDOU Family. </span>
      </footer>
    </div>
  );
};

export default Home;
