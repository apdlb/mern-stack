import { useStore } from 'react-redux';

const useAuth = () => {
  const store = useStore();
  const props = store.getState();
  const { auth } = props;

  const isAuthenticated =
    localStorage.getItem('jwtToken') && auth && auth.token && auth.token.access_token && localStorage.getItem('jwtToken') === auth.token.access_token
      ? true
      : false;

  return {
    isAuthenticated
  };
};

export default useAuth;
