/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  IconButton,
  Typography,
  Button,
  Box,
  Avatar,
  CircularProgress,
} from "@material-ui/core";
import Truncate from "react-truncate";
import { useMediaQuery } from "react-responsive";
import UseStyles from "./UseStyles";
import { Link } from "react-router-dom";
import ProductDetailsModal from "./ProductDetailsModal"

const Cards = ({ product, handleRemove, admin }) => {
  // destructure
  const { images, title, description, slug, price } = product;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = UseStyles();
  const [state, setState] = useState(1);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  // const [cartLoading, setCartLoading] = useState(false);

  const toggleRaised = () => setState(state == 1 ? 3 : 1);
  let variantArray = [];
  const [varImage, setVarImage] = useState("");

 
  return (
    <Box className={classes.head}>
      <Link to={`/product/${slug}`}>
 {/* <ProductDetailsModal open={open} product={product} handleClose={handleClose}/> */}
        <Card
          className={classes.root}
          onMouseOver={toggleRaised}
          onMouseOut={toggleRaised}
          elevation={3}
          
          // className={classes.backgroundcolor}
        >
          <div className={classes.media} onClick={() =>handleOpen()
            // window.open(images && images.length && images[0].url, "_self")
          }>
          <img src={images && images.length && images[0].url} style={{height:"100%", width:"100%",objectFit:"contain"}}/>
          </div>
          <Box className={classes.boxcontent} style={{backgroundColor:product?.category?.name==="adv"?'lime': 'white'}}>
            <div style={{ padding: "10px" }}>
              <Truncate lines={1}> {title} </Truncate>
              <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Truncate lines={1}> Rs. {price} </Truncate>
                {admin ? (
                  <div style={{display: 'flex'}}>
                    <Link to={`/admin/product/${slug}`}>Edit</Link>

                    <div style={{color: 'red',marginLeft: '15px'}}  onClick={() => handleRemove(slug)}>Delete</div>
                  </div>
                ) : null}
              </div>
            </div>
          </Box>
        </Card>
        </Link>
    </Box>
  );
};
export default Cards;
