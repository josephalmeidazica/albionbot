import React from 'react';
import App from '../modules/App';
import Calculadora from '../modules/Calculadora'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Albion Collectors Kit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Albion Collectors Kit
        </h1>

        <p className={styles.description}>
          Busque os itens abaixo:
        </p>

        <div className={styles.grid}>
          <App />
          <Calculadora />
        </div>
      </main>


    </div>
  )
}