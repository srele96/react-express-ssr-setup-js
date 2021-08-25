import { Layout } from '../components/Layout';
import styles from './NotFound.module.css';

export const NotFound = () => {
  return (
    <Layout>
      <h1 className={styles.pb_8}>404 Not Found!</h1>
      <h2>Sorry, we couldn't find what you were looking for.</h2>
    </Layout>
  );
};
