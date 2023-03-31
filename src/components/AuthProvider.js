import { Button } from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import OAuth2 from "react-simple-oauth2-login";
import userSlice from "../store/userSlice";

const AuthProvider = ({ children }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onSuccess = (response) =>
    axios({
      method: "get",
      url: "https://openidconnect.googleapis.com/v1/userinfo",
      headers: {
        authorization: "Bearer " + response.access_token
      }
    }).then((res) => dispatch(userSlice.actions.setUser(res.data)));

  const onFailure = (response) => console.error(response);

  return !user ? (
    <OAuth2
      authorizationUrl="https://accounts.google.com/o/oauth2/v2/auth"
      responseType="token"
      clientId="31486186654-gqqtlra1bdjf50mp3m1rjm9ekpglegir.apps.googleusercontent.com"
      redirectUri="https://62dsg.csb.app"
      scope="openid email profile"
      onSuccess={onSuccess}
      onFailure={onFailure}
      render={(props) => (
        <Button {...props} variant="contained" fullWidth>
          Login
        </Button>
      )}
    />
  ) : (
    children
  );
};

const a = (
  <AuthProvider>
    <h1>im a children</h1>
  </AuthProvider>
);

export default AuthProvider;
