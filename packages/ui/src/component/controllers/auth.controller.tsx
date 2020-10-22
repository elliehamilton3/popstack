import React, { useState } from 'react';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { IReactProps } from '../../interface/reactProps.interface';
import { useAuthState } from '../../store/auth.store';
import apiFetch from '../../service/apiFetch.service';

export const scope = [
  "openid",
  "profile",
  "email",
  "read:current_user",
].join(' ');

const Controller: React.FunctionComponent<IReactProps> = ({ children }: IReactProps) => {
    const auth0 = useAuth0();
    const [command] = useAuthState("command");
    const [commandTrigger] = useAuthState("commandTrigger");
    const [returnTo] = useAuthState("returnTo");
    const [jwt, setJwt] = useAuthState("jwt");
    const [, setUser] = useAuthState("user");
    const [, setError] = useAuthState("error");

    const [redirecting, redirect] = useState(false);

    const fetchUser = (withJwt?: string) =>
    apiFetch("/users/me", "GET", null, {
        auth: {
          strategy: "jwt",
          jwt: withJwt,
        },
      });

    const refreshJwt = (withJwt: string) =>
    apiFetch("/auth/jwt", "POST", null, {
        auth: {
          strategy: "jwt",
          jwt: withJwt,
        },
      }).then((res) => {
        setJwt(res.token);
      });

    const loadUser = (withJwt?: string): void => {
      fetchUser(withJwt).then((res) => {
        redirect(false);
        setUser(res.user);
      }).catch((err) => {
        redirect(false);
        setJwt(null);
        setError(err);
      });
    }

    React.useEffect(() => {
      if (jwt) {
        localStorage.setItem("jwt", jwt);
        loadUser(jwt);
      } else {
        localStorage.removeItem("jwt");
      }
    }, [jwt]);

    React.useEffect(() => {
      if (returnTo) {
        localStorage.setItem("returnTo", returnTo);
      }

      if (command === "reload") {
        loadUser();
      }

      if (command === "login") {
        redirect(true);
        const auth0Login = () => {
          auth0.loginWithRedirect({
            max_age: 30,
            redirectUri: `${window.location.origin}/auth/callback`,
            scope,
          });
        }
        if (jwt) {
          refreshJwt(jwt).catch(auth0Login);
        } else {
          auth0Login();
        }
      }

      if (command === "logout") {
        redirect(true);
        localStorage.removeItem("jwt");
        auth0.logout({
          returnTo: window.location.origin
        });
      }
    }, [commandTrigger]);

    if (redirecting) {
      return <div>Loading</div>;
    }

    return (
      <>
        {children}
      </>
    );
  };
  
export const AuthController: React.FunctionComponent<IReactProps> = ({ children }: IReactProps) => {
  return (
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN || ""}
      clientId={process.env.AUTH0_CLIENT_ID || ""}
      audience={process.env.AUTH0_AUDIENCE || ""}
      scope={scope}
      cacheLocation="localstorage">
      <Controller>
        {children}
      </Controller>
    </Auth0Provider>
  );
};

export default AuthController;