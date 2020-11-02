import React, { useEffect, useState } from "react";
import { useAuth0 , withAuthenticationRequired} from "@auth0/auth0-react";
import Navbar from "../navbar/navbar.component";
import { ThemeProvider } from "../../styles/theme";
import { Typography } from "@material-ui/core";

const Profile: React.FunctionComponent = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "popstack.eu.auth0.com";
  
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });
  
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const { user_metadata } = await metadataResponse.json();
  
        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };
  
    getUserMetadata();
  }, []);

  return <ThemeProvider>
  <Navbar />
  <div style={{paddingTop: "60px"}}>
  {isAuthenticated ? (
<>
        <Typography variant="h1">{user.name}</Typography>
        <Typography>{user.email}</Typography>
        <Typography>{user.sub}</Typography>
        <Typography variant="h2">User Metadata</Typography>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          <Typography>No user metadata defined</Typography>
        )}
  </>
    )    
        : <Typography>User not logged in</Typography>}
        </div>
        </ThemeProvider>
};

export default withAuthenticationRequired(Profile);