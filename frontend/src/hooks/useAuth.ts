import { useSelector } from 'react-redux';

const useAuth = () => {
  const auth = useSelector((state: any) => state.auth);

  const isAuthenticated = localStorage.getItem('jwtToken') && localStorage.getItem('jwtToken') === auth?.token?.access_token ? true : false;

  return {
    isAuthenticated
  };
};

export default useAuth;
