import clsx from 'clsx';
import styles from './user-avatar.module.scss';

type UserAvatarProps = {
  image: string;
  name: string;
  className?: string;
};

export const UserAvatar = ({ image, name, className }: UserAvatarProps) => {
  return (
    <div className={clsx(styles.avatarContainer, className)}>
      <img
        src={image || '/default-avatar.jpg'}
        alt={name}
        className={styles.avatar}
      />
    </div>
  );
};
