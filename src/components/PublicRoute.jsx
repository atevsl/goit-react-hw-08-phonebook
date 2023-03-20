import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLogged } from 'redux/store';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogged = useSelector(getIsLogged);
  return isLogged ? <Navigate to={redirectTo} /> : Component;
};
