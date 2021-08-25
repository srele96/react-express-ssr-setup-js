import { Link } from 'react-router-dom';
import routes from '../../shared-routes';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header>
      <nav className={styles.background}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link className={styles.link} to={routes.index}>Home</Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to={routes.withData}>With Data</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
