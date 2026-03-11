import clsx from 'clsx';
import { Button } from '../button/button';
import styles from './pagination-controls.module.scss';

type PaginationControlsProps = {
  onPrev: () => void;
  onNext: () => void;
  pageNumber: number;
  isLastPage: boolean;
  isFetching: boolean;
  prevLabel: string;
  nextLabel: string;
  className?: string;
};

export const PaginationControls = ({
  onPrev,
  onNext,
  pageNumber,
  isLastPage,
  isFetching,
  prevLabel,
  nextLabel,
  className,
}: PaginationControlsProps) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <Button
        type="button"
        onClick={onPrev}
        disabled={pageNumber === 1 || isFetching}
      >
        {prevLabel}
      </Button>

      <span className={styles.pageNumber}>{pageNumber}</span>

      <Button
        type="button"
        onClick={onNext}
        disabled={isLastPage || isFetching}
      >
        {nextLabel}
      </Button>
    </div>
  );
};
