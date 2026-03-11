import { apiClient, apiEndpoints } from '@/shared/api';
import type { UsersListResponse } from './types';

export const usersQueryKeys = {
  list: (page: number) => ['users-list', { page }] as const,
  search: (searchQuery: string, page: number) =>
    ['users-search', { page, searchQuery }] as const,
};

export const usersApi = {
  getUsers: async (
    skip?: number,
    limit?: number,
  ): Promise<UsersListResponse> => {
    const { data } = await apiClient.get(apiEndpoints.users, {
      params: {
        skip,
        limit,
      },
    });
    return data;
  },
  searchUsers: async (
    q: string,
    skip?: number,
    limit?: number,
  ): Promise<UsersListResponse> => {
    const { data } = await apiClient.get(apiEndpoints.searchUsers, {
      params: {
        q,
        skip,
        limit,
      },
    });
    return data;
  },
};
