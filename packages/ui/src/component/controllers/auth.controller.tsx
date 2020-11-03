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

const onRedirectCallback = async (appState: any) => {
  window.history.replaceState({}, document.title, window.location.pathname);
  const browserHistory = historyInit();
  browserHistory.replace((appState && appState.returnTo) || window.location.pathname);
  // Get the user
  // If doesn't exist post?
};

export const AuthController: React.FunctionComponent<IReactProps> = ({ children }: IReactProps) => {
  return (
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN || ""}
      clientId={process.env.AUTH0_CLIENT_ID || ""}
      redirectUri={window.location.origin}
      scope={scope}
      // cacheLocation="localstorage"
      useRefreshTokens={true}
      onRedirectCallback={onRedirectCallback}
      audience={process.env.AUTH0_AUDIENCE || ""}
      >
        {children}
    </Auth0Provider>
  );
};

export default AuthController;