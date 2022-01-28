import React, { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { auth } from "./firebase";
import { currentUser } from "./functions/auth";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import UseStyles from "./core/UseStyles"

const AdminRoute = lazy(() => import("./components/routes/AdminRoute"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));

const CategoryCreate = lazy(() =>
  import("./pages/admin/category/CategoryCreate")
);
const CategoryUpdate = lazy(() =>
  import("./pages/admin/category/CategoryUpdate")
);
const Requirement = lazy(() => import("./pages/admin/category/Requirement"));

const AllProducts = lazy(() => import("./pages/admin/product/AllProducts"));
const ProductCreate = lazy(() => import("./pages/admin/product/ProductCreate"));
const AdvCreate = lazy(() => import("./pages/admin/product/AdvCreate"));
const ProductUpdate = lazy(() => import("./pages/admin/product/ProductUpdate"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const RegisterComplete = lazy(() => import("./pages/auth/RegisterComplete"));
const CategoryHome = lazy(() => import("./core/CategoryHome"));
const Base = lazy(() => import("./core/Base"));
const AllFurnitures = lazy(() => import("./core/AllFurnitures"));
const NavBar = lazy(() => import("./core/navBar/NavBar"));
const ContactUs = lazy(() => import("./core/ContactUs"));
const Footer = lazy(() => import("./core/Footer"));

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
    <Suspense fallback={
      <div style={{textAlign: 'center',padding:'40px'}}>Loading...</div>
    }>
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
            <Route
              exact
              path="/register/complete"
              component={RegisterComplete}
            />
            <Route exact path="/forgot/password" component={ForgotPassword} />

            <AdminRoute
              exact
              path="/admin/dashboard"
              component={AdminDashboard}
            />
            <AdminRoute
              exact
              path="/admin/category"
              component={CategoryCreate}
            />
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

          <ContactUs />

          <Footer />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
