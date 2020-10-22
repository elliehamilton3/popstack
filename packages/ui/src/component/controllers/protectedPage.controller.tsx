import React from 'react';
import { login, useAuthState } from '../../store/auth.store';

export const ProtectedPage = (component: React.FunctionComponent, loadingView?: () => React.ReactElement): React.FunctionComponent => {
  const [jwt] = useAuthState("jwt");
  const [user] = useAuthState("user");

  if (jwt && !user) {
    return function loadingUser() {
      return loadingView && loadingView() || <div>Loading</div>;
    };
  }

  if (!jwt) {
    return function loginRequired() {
      return login(`${window.location.pathname}${window.location.search || ''}`);
    };
  }
  return component;
};

export default ProtectedPage;