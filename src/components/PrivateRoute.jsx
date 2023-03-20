import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsfetchCurrentUser, getIsLogged } from 'redux/store';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogged = useSelector(getIsLogged);
  const isfetchCurrentUser = useSelector(getIsfetchCurrentUser);

  const shouldRedirect = !isLogged && !isfetchCurrentUser;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
