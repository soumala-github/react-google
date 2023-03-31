import {
  Container,
  createTheme,
  ThemeProvider,
  CssBaseline
} from "@mui/material";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductListPage from "./pages/ProductListPage";
import UserPage from "./pages/UserPage";
import { Provider } from "react-redux";
import store from "./store";
import AuthProvider from "./components/AuthProvider";

const theme = createTheme({});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CssBaseline />
          <Router>
            <Navbar />
            <Container>
              <Switch>
                <Route path="/" exact={true}>
                  <Redirect to="/products" />
                </Route>
                <Route path="/products" exact={true}>
                  <ProductListPage />
                </Route>
                <Route path="/user" component={UserPage} />
              </Switch>
            </Container>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
