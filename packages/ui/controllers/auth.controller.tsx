import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
// import historyInit from '../../service/historyInit.service'

export const scope = [
  "openid",
  "profile",
  "email",
  "read:current_user",
  "update:current_user_metadata"
].join(' ');

const onRedirectCallback = (appState: any) => {
  // const {user} = useAuth0();
  // console.log(user)
//   console.log("Redirect", "======", appState)
//   window.history.replaceState({}, document.title, window.location.pathname);
//   const browserHistory = historyInit();
//   browserHistory.replace((appState && appState.returnTo) || window.location.pathname);
  // Get the user
  // If doesn't exist post?
};

export const AuthController: React.FunctionComponent = ({ children }) => {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN || ""}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || ""}
      redirectUri={process.env.NEXT_PUBLIC_REDIRECT_URI}
      scope={scope}
      // cacheLocation="localstorage"
      useRefreshTokens={true}
      onRedirectCallback={onRedirectCallback}
      audience={process.env.NEXT_PUBLIC_AUTH0_AUDIENCE || ""}
      >
        {children}
    </Auth0Provider>
  );
};

export default AuthController;