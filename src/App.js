import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AdminRoute from "./components/routes/AdminRoute";
import { auth } from "./firebase";
import { currentUser } from "./functions/auth";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CategoryCreate from "./pages/admin/category/CategoryCreate";
import CategoryUpdate from "./pages/admin/category/CategoryUpdate";
import Requirement from "./pages/admin/category/Requirement";

import AllProducts from "./pages/admin/product/AllProducts";
import ProductCreate from "./pages/admin/product/ProductCreate";
import AdvCreate from "./pages/admin/product/AdvCreate";
import ProductUpdate from "./pages/admin/product/ProductUpdate";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import RegisterComplete from "./pages/auth/RegisterComplete";
import CategoryHome from "./core/CategoryHome";
import Base from "./core/Base"
import AllFurnitures from "./core/AllFurnitures";
import NavBar from "./core/navBar/NavBar";
import UseStyles from "./core/UseStyles";

import ContactUs from "./core/ContactUs";
import Footer from "./core/Footer";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const classes = UseStyles();
  const dispatch = useDispatch();

  const routePath = useLocation();
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [routePath]);


  // to check firebase auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        // console.log("user", user);

        currentUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
          })
          .catch((err) => console.log(err));
      }
    });
    // cleanup
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className={classes.background}>
    <div className={classes.wrap}>
      <NavBar />
      {/* <SideDrawer /> */}
      <ToastContainer />
      <Switch>
      <Route path="/" exact component={Base} />
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/login" component={Login} />
        <Route path="/furnitures" exact component={AllFurnitures} />
       
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/complete" component={RegisterComplete} />
        <Route exact path="/forgot/password" component={ForgotPassword} />
       
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute exact path="/admin/category" component={CategoryCreate} />
        <AdminRoute
          exact
          path="/admin/category/:slug"
          component={CategoryUpdate}
        />
        <AdminRoute exact path="/admin/product" component={ProductCreate} />
        <AdminRoute exact path="/admin/adv" component={AdvCreate} />
        <AdminRoute exact path="/admin/req" component={Requirement} />
        <AdminRoute exact path="/admin/products" component={AllProducts} />
        <AdminRoute
          exact
          path="/admin/product/:slug"
          component={ProductUpdate}
        />
        <Route exact path="/category/:slug" component={CategoryHome} />
  
      </Switch>

      <ContactUs/>

    <Footer/>
    </div>
    </div>
  );
};

export default App;
