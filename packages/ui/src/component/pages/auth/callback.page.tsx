import React, { useState } from 'react';
import { useAuthState } from '../../../store/auth.store';
import { Redirect } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';
import { scope } from '../../controllers/auth.controller';
import backendFetch from '../../../service/apiFetch.service';

const Auth0Provider: React.FunctionComponent = () => {
  const [, setJwt] = useAuthState("jwt");
  const [, setError] = useAuthState("error");

  const auth0 = useAuth0();
  const { user, error } = auth0;

  React.useEffect(() => {
    if (error) {
      setError(error);
    } else if (user) {
      const { getAccessTokenSilently } = auth0;
      getAccessTokenSilently({
        audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
        scope,
        redirect_uri: `${window.location.origin}/auth/callback`,
      }).then((bearerToken) => {
        backendFetch("/auth/auth0", "POST", null, {
          auth: {
            strategy: "jwt",
            jwt: bearerToken,
          },
        }).then((res) => {
          setJwt(res.token);
        }).catch((err) => {
          setJwt(null);
          setError(err);
        });
      });
    }
  }, [user, error]);
  return null;
};

export const CallbackView: React.FunctionComponent = () => {
  const [authError, setError] = useAuthState("error");
  const [isLoggedIn] = useAuthState("user");
  const [returnTo] = useAuthState("returnTo");

  const [autoTimeout, setAuthTimeout] = useState(0);
  if (!autoTimeout) {
    setAuthTimeout(setTimeout(() => {
      setError(new Error("Auth timeout"))
    }, 3000) as never);
  }

  if (authError) {
    clearTimeout(autoTimeout);
    return <div>Error</div>;
  }

  if (isLoggedIn) {
    clearTimeout(autoTimeout);
    localStorage.removeItem("returnTo");
    return <Redirect to={returnTo || "/dashboard"} />
  }

  return (
    <>
      <Auth0Provider />
      <div>Loading</div>
    </>
  );
};

export default CallbackView;