import { Link } from 'react-router';
import { routes } from '@/shared/routes/routes';
import styles from './home.module.scss';

export const Home = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Hello GabaHR! 👋</h1>
      <Link to={routes.users.getLink()} className={styles.link}>
        View Users
      </Link>
    </div>
  );
};
