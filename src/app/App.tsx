import { Route, Routes } from 'react-router';
import { Home } from '@/pages/home/home';
import { UsersListing } from '@/pages/users-listing/users-listing';
import { routes } from '@/shared/routes/routes';

export const App = () => {
  return (
    <Routes>
      <Route path={routes.home.path} element={<Home />} />
      <Route path={routes.users.path} element={<UsersListing />} />
    </Routes>
  );
};
