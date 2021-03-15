import React from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import { SearchArea } from '../components/SearchArea';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>GitHub Jobs | Home</title>
      </Head>

      <main>
        <div className={styles.header}>
          <p>Github</p>
          <span>Jobs</span>
        </div>

        <SearchArea />

      </main>
    </div>
  );
}

export default Home;
