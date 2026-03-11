import type { ChangeEvent } from 'react';
import clsx from 'clsx';
import SearchIcon from '@/shared/ui/icons/search.svg?react';
import { Input } from '../input/input';
import styles from './search-bar.module.scss';

type SearchBarProps = {
  inputValue: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
};

export const SearchBar = ({
  inputValue,
  onInputChange,
  placeholder,
  className,
}: SearchBarProps) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <SearchIcon className={styles.icon} aria-hidden="true" />
      <Input
        name="search"
        placeholder={placeholder}
        value={inputValue}
        onChange={onInputChange}
        className={styles.input}
      />
    </div>
  );
};
