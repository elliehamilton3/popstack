import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ThemeProvider } from "../../styles/theme";
import Navbar from "../navbar/navbar.component";

const Profile: React.FunctionComponent =  () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return  <ThemeProvider>
  <Navbar />
  {isAuthenticated ? <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>: <div>Not authenticated</div>}
    </ThemeProvider>
};

export default Profile;