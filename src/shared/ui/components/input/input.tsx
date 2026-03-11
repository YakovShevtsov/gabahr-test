import type { InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './input.module.scss';

type InputProps = {
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: InputProps) => {
  return <input {...props} className={clsx(styles.input, className)} />;
};
