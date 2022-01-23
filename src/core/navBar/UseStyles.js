import { makeStyles } from "@material-ui/core/styles";
const UseStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  root: {
    padding: "25px",
    "@media (max-width: 900px)": {
      marginBottom: "0px",
    },
  },
  header: {
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    textAlign: "center",

    cursor: "pointer",
    height: "40px",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 600,
    size: "18px",
    marginLeft: "48px",
    cursor: "pointer",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px",
  },
  

  drawerContainer: {
    padding: "20px 30px",
  },

  content: {
    flexGrow: 1,
    marginLeft: "100px",
  },
  rectangle: {
    width: "100%",
    fontFamily: "Source Sans Pro",
    color: "#1d1d1d",
    paddingLeft: "20px",

    opacity: 0.6,
  },
  backgroundcolor: {
    backgroundColor: 'white',
  },
  shiftright: {
    paddingLeft:"30px",
    fontSize:"14px",
    fontWeight:'700',
    color:'black'
     //color:theme.palette.textSecondary.main,
    },
  accountname: {
    display: "flex",
    justifyContent: "center",

    alignItems: "center",
  },
  navmobilemenu: {
    padding: "5px",
  //  color:theme.palette.textSecondary.main
  },
}));

export default UseStyles;
