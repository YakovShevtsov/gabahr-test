import { useEffect, useMemo, useState } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import debounce from 'lodash.debounce';
import { usersApi, usersQueryKeys } from '@/entities/user';

export const useUsersList = (usersPerPage: number) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const debouncedSetSearchQuery = useMemo(
    () =>
      debounce((query: string) => {
        setSearchQuery(query);
        setPageNumber(1);
      }, 500),
    [],
  );

  useEffect(() => {
    return () => debouncedSetSearchQuery.cancel();
  }, [debouncedSetSearchQuery]);

  const { data, error, isLoading, isError, isFetching } = useQuery({
    queryKey: searchQuery
      ? usersQueryKeys.search(searchQuery, pageNumber)
      : usersQueryKeys.list(pageNumber),
    queryFn: () => {
      const usersToSkip = (pageNumber - 1) * usersPerPage;
      return searchQuery
        ? usersApi.searchUsers(searchQuery, usersToSkip, usersPerPage)
        : usersApi.getUsers(usersToSkip, usersPerPage);
    },
    placeholderData: keepPreviousData,
  });

  const isLastPage = !data?.total || pageNumber * usersPerPage >= data.total;

  const goToNextPage = () => {
    setPageNumber((p) => p + 1);
  };
  const goToPrevPage = () => {
    setPageNumber((p) => p - 1);
  };

  return {
    data,
    error,
    isLoading,
    isError,
    isFetching,
    isLastPage,
    pageNumber,
    onSearch: debouncedSetSearchQuery,
    goToNextPage,
    goToPrevPage,
  };
};
