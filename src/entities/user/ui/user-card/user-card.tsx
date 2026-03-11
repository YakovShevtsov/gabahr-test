import { UserAvatar } from '@/shared/ui/components';
import type { User } from '../../api/types';
import styles from './user-card.module.scss';

export type UserCardProps = User;

export const UserCard = ({
  image,
  firstName,
  lastName,
  username,
  email,
}: UserCardProps) => {
  return (
    <div className={styles.card}>
      <UserAvatar
        image={image}
        name={`${firstName} ${lastName}`}
        className={styles.avatar}
      />
      <div className={styles.content}>
        <h3 className={styles.name}>
          {firstName} {lastName}
        </h3>
        <p className={styles.username}>@{username}</p>
        <p className={styles.email}>{email}</p>
      </div>
    </div>
  );
};
