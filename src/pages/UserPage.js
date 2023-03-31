import { Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Route, Switch, useHistory, useParams } from "react-router-dom";

const UserPageName = () => {
  const params = useParams();
  const history = useHistory();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (params.username !== user.name) history.push("/products");
  }, [params.username, history, user]);

  return <Typography>{JSON.stringify(params)}</Typography>;
};

const UserPage = () => {
  const history = useHistory();

  return (
    <>
      <Typography variant="h1" color="error">
        User
      </Typography>
      <Button
        variant="contained"
        onClick={() => {
          history.push("/products");
        }}
      >
        Home
      </Button>
      <Link to="/user/name">User name</Link>
      <Link to="/user/lastname">User lastname</Link>
      <Switch>
        <Route path="/user/name">
          <Typography variant="h2">Camila</Typography>
        </Route>
        <Route path="/user/lastname">
          <Typography variant="h2">Zuluaga</Typography>
        </Route>
      </Switch>
    </>
  );
};

export default UserPage;
