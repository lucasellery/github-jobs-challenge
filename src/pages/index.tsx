import React from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import { SearchArea } from '../components/SearchArea';
import Time from '../components/Time';
import Location from '../components/Location';

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

        <div className={styles.bodyContainer}>
          <div className={styles.location}>
            <Time />
            <Location />

          </div>
          <div className={styles.jobsList}>
            blbalab
          </div>

        </div>

      </main>
    </div>
  );
}

export default Home;
