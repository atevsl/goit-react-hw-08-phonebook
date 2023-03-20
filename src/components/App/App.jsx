import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/authSlice';
import { PrivateRoute } from '../PrivateRoute';
import { getIsfetchCurrentUser } from 'redux/store';
import Loader from 'components/Loader/Loader';
import { PublicRoute } from 'components/PublicRoute';
import { Layout } from 'components/Layout';

const HomePage = lazy(() => import('../../pages/Home'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const isfetchCurrentUser = useSelector(getIsfetchCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isfetchCurrentUser ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
