import { useState, type ChangeEvent } from 'react';
import clsx from 'clsx';
import { UserCard } from '@/entities/user';
import { PaginationControls, SearchBar } from '@/shared/ui/components';
import { useUsersList } from './use-users-list';
import styles from './users-list.module.scss';

const USERS_PER_PAGE = 10;

export const UsersList = () => {
  const {
    data,
    error,
    isLoading,
    isError,
    isFetching,
    isLastPage,
    pageNumber,
    onSearch,
    goToNextPage,
    goToPrevPage,
  } = useUsersList(USERS_PER_PAGE);

  const [inputValue, setInputValue] = useState('');

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onSearch(event.target.value);
  };

  const handlePrevPage = () => {
    goToPrevPage();
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleNextPage = () => {
    goToNextPage();
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  if (isLoading) {
    return <p className={styles.loading}>Loading...</p>;
  }

  if (isError) {
    return (
      <p className={styles.error}>
        {error?.message ?? 'Something went wrong. Please try again later.'}
      </p>
    );
  }

  return (
    <>
      <SearchBar
        className={styles.searchBar}
        inputValue={inputValue}
        onInputChange={handleSearch}
        placeholder="Search for users"
      />

      {data?.users && data.users.length > 0 ? (
        <>
          <ul className={clsx(styles.list, isFetching && styles.fetching)}>
            {data.users.map((user) => (
              <li key={user.id} className={styles.listItem}>
                <UserCard {...user} />
              </li>
            ))}
          </ul>
          <PaginationControls
            className={styles.pagination}
            onPrev={handlePrevPage}
            onNext={handleNextPage}
            pageNumber={pageNumber}
            isLastPage={isLastPage}
            isFetching={isFetching}
            prevLabel="Prev"
            nextLabel="Next"
          />
        </>
      ) : (
        <p className={styles.empty}>No users found.</p>
      )}
    </>
  );
};
