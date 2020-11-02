import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { IReactProps } from '../../interface/reactProps.interface';
import historyInit from '../../service/historyInit.service'

export const scope = [
  "openid",
  "profile",
  "email",
  "read:current_user",
  "update:current_user_metadata"
].join(' ');

const onRedirectCallback = (appState: any) => {
  // If using a Hash Router, you need to use window.history.replaceState to
  // remove the `code` and `state` query parameters from the callback url.
  // 
  window.history.replaceState({}, document.title, window.location.pathname);
  const browserHistory = historyInit();
  browserHistory.replace((appState && appState.returnTo) || window.location.pathname);
};

export const AuthController: React.FunctionComponent<IReactProps> = ({ children }: IReactProps) => {
  return (
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN || ""}
      clientId={process.env.AUTH0_CLIENT_ID || ""}
      redirectUri={window.location.origin}
      audience={"https://popstack.eu.auth0.com/api/v2/"}
      scope={scope}
      cacheLocation="localstorage"
      useRefreshTokens={true}
      onRedirectCallback={onRedirectCallback}
      >
        {children}
    </Auth0Provider>
  );
};

export default AuthController;