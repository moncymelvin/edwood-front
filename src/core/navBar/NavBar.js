import React, { useState, useEffect } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  MenuItem,
  Menu,
  InputBase,
  List,
  ListItem,
  Paper,
  Icon,
  Popper,
  Grow,
  ClickAwayListener,
  MenuList,
  Badge,
  Snackbar,
} from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import UseStyles from "./UseStyles";
import styles from "./NavBar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../functions/category";
import firebase from "firebase/compat/app";

const NavBar = () => {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  let dispatch = useDispatch();
  let { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    setLoading(true);
    getCategories().then((c) => {
      setCategories(c.data);
      setLoading(false);
    });
  }, []);

  const [megaMenu, setMegaMenu] = useState(false);
  const { mobileView, drawerOpen } = state;
  const classes = UseStyles();
  const [text, setText] = useState("En");
  const [anchorEl, setAnchorEl] = useState(null);
  const [opens, setOpens] = useState(false);
  const [classification, setClassification] = useState([]);
  const [cart, setCart] = useState([]);
  const anchorRef = React.useRef(null);
  let history = useHistory();
  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  const Alert = (props) => {
    // return <MuiAlert elevation={1} variant="filled" {...props} />;
  };

  const handleToggle = () => {
    setOpens((prevOpen) => !prevOpen);
  };

  const handleCloses = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpens(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpens(false);
    }
  };

  useEffect(() => {
    // i18next.changeLanguage("en");
    //Manually setting responsiveness for Navbar since material UI navbar is not responsive
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //Responsive view for Desktop

  const displayDesktop = () => {
    return (
      <div
        style={{
          display: "flex",
          // marginLeft: "65%",
          alignItems: "center",
          justifyContent: 'space-between',
          padding:'5px'
        }}
      >
        <img src="/logo.png" style={{ height: "60px",marginLeft:'30px' }} />
        {user ? (
          <div style={{display: 'flex',alignItems:'center',marginRight: '30px'}}>
            <div onClick={logout} className={classes.shiftright}>
              Logout
            </div>
            <div className={classes.shiftright}>
              Hello, {user?.email && user?.email?.split("@")[0]}
            </div>
          </div>
        ) : (
          <div style={{display: 'flex',alignItems:'center',marginRight: '30px'}}>
            <Link to="/">
              <div className={classes.shiftright} onClick={()=>window.scrollTo(0, 0)}>Home</div>
            </Link>
            <div
              ref={anchorRef}
              aria-controls={opens ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              className={classes.shiftright}
              onClick={handleToggle}
              style={{
                cursor: "pointer",
                alignItems: "center",
                display: "flex",
              }}
            >
              Furnitures
              <ArrowDropDownIcon />
            </div>
            <Popper
              open={opens}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
              placement="bottom"
              style={{ marginLeft: "20px" }}
            >
              {({ TransitionProps, placement }) => (
                <Grow {...TransitionProps}>
                  <Paper>
                    <ClickAwayListener onClickAway={handleCloses}>
                      <MenuList
                        autoFocusItem={opens}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                        // className={classes.shiftright}
                      >
                        {categories.map((c) => (
                          <Link to={`/category/${c.slug}`}>
                            <MenuItem
                              style={{
                                color: "black",
                                fontSize: "14px",
                              }}
                            >
                              {c.name}
                            </MenuItem>
                          </Link>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            <a href="#contact">
              <div className={classes.shiftright}>Contact Us</div>
            </a>
            <a
              href="tel:+918590774213"
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "5px",
                borderRadius: "5px",
                marginLeft: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CallIcon /> +91 8590774213
            </a>
          </div>
        )}
      </div>
    );
  };

  //Responsive view for Mobile with drawer

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Paper className={classes.backgroundcolor} square={true} elevation={0}>
        <Toolbar>
  
        <IconButton
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>

          <a
              href="tel:+918590774213"
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "5px",
                borderRadius: "5px",
                marginLeft: "10px",
                display: "flex",
                alignItems: "center",
                alignContent: 'center'
              }}
            >
              <CallIcon style={{marginRight:'5px'}}/>{" "}  +91 8590774213
            </a>
            
          <img src="/logo.png" style={{ height: "40px",textAlign: 'center',marginLeft:'auto' }} />
       
         
          <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <IconButton
              {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerClose,
              }}
            >
              <MenuIcon />
            </IconButton>

            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              className={classes.root}
            >
            
            {user ? (
          <div>
            <div onClick={logout} className={classes.shiftright}>
              Logout
            </div>
            <br/>
            <div className={classes.shiftright}>
              Hello, {user?.email && user?.email?.split("@")[0]}
            </div>
          </div>
        ) : (
          <div>
            <Link to="/">
              <div className={classes.shiftright} onClick={()=>window.scrollTo(0, 0)}>Home</div>
            </Link>
            <br/>
            <div
              ref={anchorRef}
              aria-controls={opens ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              className={classes.shiftright}
              onClick={handleToggle}
              style={{
                cursor: "pointer",
                alignItems: "center",
                display: "flex",
              }}
            >
              Furnitures
              <ArrowDropDownIcon />
            </div>
            <Popper
              open={opens}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
              placement="bottom"
              style={{ marginLeft: "20px" }}
            >
              {({ TransitionProps, placement }) => (
                <Grow {...TransitionProps}>
                  <Paper>
                    <ClickAwayListener onClickAway={handleCloses}>
                      <MenuList
                        autoFocusItem={opens}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                        // className={classes.shiftright}
                      >
                        {categories.map((c) => (
                          <Link to={`/category/${c.slug}`}>
                            <MenuItem
                              style={{
                                color: "black",
                                fontSize: "14px",
                              }}
                            >
                              {c.name}
                            </MenuItem>
                          </Link>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            <br/>
            <a href="#contact">
              <div className={classes.shiftright}>Contact Us</div>
            </a>
            <br/>
          </div>
        )}
            </List>
          </Drawer>
        </Toolbar>
      </Paper>
    );
  };

  return <div style={{position:'sticky',top:'0',zIndex: '1',backgroundColor: 'white'}}>{mobileView ? displayMobile() : displayDesktop()}</div>;
};

export default NavBar;
