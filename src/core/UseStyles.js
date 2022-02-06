import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

const UseStyles = makeStyles((theme) => ({
  wrap:{
marginLeft: '150px',
marginRight: '150px',
backgroundColor: 'white',
[theme.breakpoints.down("sm")]: {
  marginLeft: '0px',
marginRight: '0px',
},
  },
  background:{
backgroundColor: '#F3F3F3'
  },
  root: {
    width: "100%",
  },
  addresssize: {
    fontSize: 14,
    fontFamily: "Source Sans Pro",
  },
  singleline: {
    display: "flex",
  },
  cardaction: {
    color: "#2874f0",
    cursor: "pointer",
    fontSize: 14,
  },
  addbutton: {
    display: "flex",
    width: "100%",
    border: "1px solid",
    borderRadius: 5,
    borderColor: "#D3D3D3",

    height: "260px",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color:"grey",
    cursor:"pointer"
  },

  addressroot: {
    width: "100%",
    border: "1px solid",
    borderRadius: 5,
    borderColor: "#D3D3D3",
    padding: "10px",
    height: "270px",
  },

  cardactionitem:{
marginTop:"10px"
  },


  addresscard: {
    margin: "5px 10px 10px 0px",
  },
  head: {
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0px",
    },
  },
  media: {
    display: "flex",
    justifyContent: "center",
  },
  expand: {
    marginLeft: "auto",
  },
  backgroundcolor: {
    backgroundColor: theme.palette.background.default,
  },
  iconFilled: {
    color: theme.palette.secondary.main,
  },
  leftshift: {
    marginLeft: "5px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "1px",
      fontSize: 12,
    },
  },
  nameingsize: {
    height: "50px",
  },
  namefontsize: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  boxcontent: {
    // margin: "15px 10px 0px 10px",
    
  },
  cartbutton: {
    [theme.breakpoints.down("md")]: {
      fontSize: 10,
    },
  },
  avatar: {
    display: "flex",
    height: "40px",
  },
  avatarpadding: {
    marginRight: "10px",
    marginTop: "5px",
  },
  deliver:{
    marginLeft:"7px",
    marginTop:"7px"
  },
  products: {
    // padding: "0px",
    [theme.breakpoints.down("md")]: {
      padding: "3px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "5px",
      paddingBottom: "10px"
    },
  },
  productwrapper:{
    // backgroundColor:"white",
    [theme.breakpoints.down("sm")]: {
      margin:"0px 10px 0px 10px",
      
    },
  },
  logo:{
    width:"600px",
    [theme.breakpoints.down("sm")]: {
      width:"300px",
      
    },
  },
  fontSize:{
    fontSize: 25,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      
    },
  }
}));

export default UseStyles;
