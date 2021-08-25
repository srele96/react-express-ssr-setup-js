import { useState } from 'react';
import { Layout } from '../components/Layout';
import styles from './Home.module.css';

export const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <h1 className={styles.pb_8}>ReactJS SSR.</h1>
      <p className={styles.pb_8}>
        Webpack setup for ReactJS with Express server.
      </p>

      <h2 className={styles.pb_8}>HTML is hydrated.</h2>
      <p className={styles.pb_8}>Click button.</p>
      <button
        className={styles.btn}
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Click count: <b><i>{count}</i></b>
      </button>
    </Layout>
  );
};
