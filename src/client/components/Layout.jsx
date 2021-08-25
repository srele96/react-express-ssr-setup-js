import { Header } from './Header';
import styles from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        {children}
      </div>
    </div>
  );
};
