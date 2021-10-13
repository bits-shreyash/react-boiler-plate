import logo from './logo.svg';
import './App.css';
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"
import PostsPage from '../pages/posts';
import { BrowserRouter, Switch } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>

    <div className={{ flexGrow: 1 }}>
    {/* <Grid container xs={12}> */}
      <main role="main">
        <Switch>
          <PublicRoute exact path="/" component={PostsPage} />
          <PrivateRoute exact path="/posts" component={PostsPage} />
        </Switch>
      </main>
    {/* </Grid> */}
    </div>
  </BrowserRouter>
  );
}

export default App;
