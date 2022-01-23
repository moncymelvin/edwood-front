import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
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
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import UseStyles from "./UseStyles";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const [megaMenu, setMegaMenu] = useState(false);
  const { mobileView, drawerOpen } = state;
  const classes = UseStyles();
  const [text, setText] = useState("En");
  const [anchorEl, setAnchorEl] = useState(null);
  const [opens, setOpens] = useState(false);
  const [classification, setClassification] = useState([]);
  const [cart, setCart] = useState([]);
  const anchorRef = React.useRef(null);

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
      <div>
        <Paper className={classes.backgroundcolor} square={true} elevation={0}>
          <div className={styles.wrapper}>
            <Toolbar className={classes.toolbar}>
              <div style={{ display: "flex", marginLeft: "70%" }}>
                {false ? (
                  <>
                    <Button
                      ref={anchorRef}
                      aria-controls={opens ? "menu-list-grow" : undefined}
                      aria-haspopup="true"
                      className={classes.shiftright}
                      onClick={handleToggle}
                    >
                      test
                    </Button>
                    <Popper
                      open={opens}
                      anchorEl={anchorRef.current}
                      role={undefined}
                      transition
                      disablePortal
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin:
                              placement === "bottom"
                                ? "center top"
                                : "center bottom",
                          }}
                        >
                          <Paper>
                            <ClickAwayListener onClickAway={handleCloses}>
                              <MenuList
                                autoFocusItem={opens}
                                id="menu-list-grow"
                                onKeyDown={handleListKeyDown}
                                className={classes.shiftright}
                              >
                                <MenuItem onClick={handleClose}>
                                  <Link href="/accountdetails">Profile</Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                  <Link href="/orders">Orders</Link>
                                </MenuItem>
                                <MenuItem
                                // onClick={() => {
                                //   deleteCookie("inv_ud");
                                //   setUserDetails(null);
                                //   router.push("/");
                                // }}
                                >
                                  Logout
                                </MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </>
                ) : (
                  <>
                    <>
                      <div
                      ref={anchorRef}
                      aria-controls={opens ? "menu-list-grow" : undefined}
                      aria-haspopup="true"
                      className={classes.shiftright}
                      onClick={handleToggle}
                    >
                      Furnitures
                    </div>
                      <Popper
                        open={opens}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        transition
                        disablePortal
                      >
                        {({ TransitionProps, placement }) => (
                          <Grow
                            {...TransitionProps}
                            style={{
                              transformOrigin:
                                placement === "bottom"
                                  ? "center top"
                                  : "center bottom",
                            }}
                          >
                            <Paper>
                              <ClickAwayListener onClickAway={handleCloses}>
                                <MenuList
                                  autoFocusItem={opens}
                                  id="menu-list-grow"
                                  onKeyDown={handleListKeyDown}
                                  className={classes.shiftright}
                                >
                                  <MenuItem onClick={handleClose}>
                                    <Link href="/accountdetails">Profile</Link>
                                  </MenuItem>
                                  <MenuItem onClick={handleClose}>
                                    <Link href="/orders">Orders</Link>
                                  </MenuItem>
                                  <MenuItem
                                  // onClick={() => {
                                  //   deleteCookie("inv_ud");
                                  //   setUserDetails(null);
                                  //   router.push("/");
                                  // }}
                                  >
                                    Logout
                                  </MenuItem>
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>
                    </>

                    <Link href="/login">
                      <div className={classes.shiftright}>Contact Us</div>
                    </Link>

                    <Link href="/login">
                      <div className={classes.shiftright}>Login</div>
                    </Link>
                  </>
                )}
              </div>
            </Toolbar>
          </div>
        </Paper>
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
              {false ? (
                <Link href="/login">
                  <ListItem button>user</ListItem>
                </Link>
              ) : (
                <Link href="/login">
                  <Button
                    aria-controls="simple-menu"
                    aria-hasPopup="true"
                    className={classes.shiftright}
                  >
                    <PersonIcon fontSize="small" /> Login
                  </Button>
                </Link>
              )}
              <br />
              <br />
              <br />
              <hr />
              <Typography variant="p" className={classes.shiftright}>
                <b>Top categories</b>
              </Typography>
              <br /> <br />
            </List>
          </Drawer>
        </Toolbar>
      </Paper>
    );
  };

  const goToProductList = (name, cs_id, cat_id, sct_id) => {
    // let queries = {};
    // cs_id && (queries["cs_id"] = cs_id);
    // cat_id && (queries["cat_id"] = cat_id);
    // sct_id && (queries["sct_id"] = sct_id);
    // router.push({
    //   pathname: `/${slugName(name)}`,
    //   query: queries,
    // });
  };

  return (
    <div>
      <div className={classes.root}>
        <header>
          <AppBar elevation={0} className={classes.header}>
            {mobileView ? displayMobile() : displayDesktop()}
          </AppBar>
        </header>
      </div>
    </div>
  );
};

export default NavBar;
