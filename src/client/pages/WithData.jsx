import axios from 'axios';
import { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { getInitialState } from '../util';
import styles from './WithData.module.css';

const getData = async () => {
  const axiosRes = await axios.get('https://srele96.npkn.net/test');
  if (axiosRes.status !== 200) throw new Error('Fetch status is not 200');
  return axiosRes;
};

export const WithData = ({ serverInitialState }) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(getInitialState(serverInitialState, []));

  useEffect(() => {
    let isMounted = true;

    if (window.__INITIAL_STATE__) {
      delete window.__INITIAL_STATE__;
    } else {
      getData().then(
        (axiosRes) => {
          if (isMounted) setData(axiosRes.data.items);
        },
        (error) => {
          setError(error);
        }
      );
    }

    return () => (isMounted = false);
  }, []);

  return (
    <Layout>
      <h1 className={styles.pb_8}>Server Side Rendered page with data.</h1>
      <p className={styles.pb_8}>
        Initially this page recieves props from server.
        Afterwards fetches data on client side.
      </p>

      {error && (
        <div className={styles.pb_8}>
          <b>Unable to get data.</b>
        </div>
      )}
      <ul className={styles.list}>
        {data.map((item) => (
          <li className={styles.item} key={item.id}>
            <span className={styles.text}>{item.text}</span>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default getData;
