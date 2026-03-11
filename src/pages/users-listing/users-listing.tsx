import { UsersList } from './ui/users-list/users-list';
import styles from './users-listing.module.scss';

export const UsersListing = () => {
  return (
    <main className={styles.page}>
      <UsersList />
    </main>
  );
};
