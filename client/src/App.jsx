import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Signin from "./pages/Signin";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Switch>
        <Route exact path = "/" > 
          <Home/>
        </Route>
        <Route path = "/products/:category" > 
          <ProductList/>
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">
          {user ? <Redirect to ="/"/> : <Signin/>}
          <Signin />
        </Route>
        <Route path="/register">
        {user ? <Redirect to ="/"/> : <Register/>}
          <Register />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;