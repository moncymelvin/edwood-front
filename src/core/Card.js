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
import AutoFitImage from "react-image-autofit-frame";
import Truncate from "react-truncate";
import { useMediaQuery } from "react-responsive";
import UseStyles from "./UseStyles";

const Cards = ({
  product
}) => {

  // destructure
  const { images, title, description, slug, price } = product;

  const classes = UseStyles();
  const [state, setState] = useState(1);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  // const [cartLoading, setCartLoading] = useState(false);

  const toggleRaised = () => setState(state == 1 ? 3 : 1);
  let variantArray = [];
  const [varImage, setVarImage] = useState("");
  // const renderVariant = () => {
  //   proVariants &&
  //     proVariants.forEach((data) => {
  //       data.attributes.product_variant.media &&
  //         variantArray.push(
  //           <>
  //             <div className={classes.avatarpadding}>
  //               <Avatar variant="rounded">
  //                 <img
  //                   src={
  //                     data.attributes.images.length > 0 &&
  //                     data.attributes.images[0].image
  //                   }
  //                   height="40px"
  //                   width="40px"
  //                 />
  //               </Avatar>
  //             </div>
  //           </>
  //         );
  //     });
  //   return variantArray;
  // };

  // useEffect(() => {
  //   proVariants.forEach((data) => {
  //     data.attributes.product_variant.media &&
  //       data.attributes.images.length > 0 &&
  //       setVarImage(data.attributes.images[0].image);
  //   });
  // }, [proVariants]);

  // const showImage = () => {
  //   if (imageLink) {
  //     return imageLink;
  //   }
  //   if (varImage) {
  //     return varImage;
  //   } else {
  //     return "noimage.png";
  //   }
  // };
  return (
    <Box className={classes.head}>
      <a
      // target="_blank"
      // href={uri}
      >
        <Card
          className={classes.root}
          onMouseOver={toggleRaised}
          onMouseOut={toggleRaised}
          elevation={3}
          onClick={()=>window.open(images && images.length && images[0].url,"_self")}
          // className={classes.backgroundcolor}
        >
          <div className={classes.media}>
            {isTabletOrMobile ? (
              <AutoFitImage
                // positionY="top"
                frameWidth="280px"
                frameHeight="200px"
                imgSrc={images && images.length && images[0].url}
                imgSize="contain"
              />
            ) : (
              <AutoFitImage
                // positionY="top"
                frameWidth="350px"
                frameHeight="300px"
                imgSrc={images && images.length && images[0].url}
                imgSize="contain"
              />
            )}
          </div>
          <Box className={classes.boxcontent}>

          <div style={{padding:'10px'}}>

          <Truncate lines={1}> Great Matress </Truncate><br/>
          <Truncate lines={1}> $65.98 </Truncate>
          </div>
         
          </Box>
        </Card>
      </a>
    </Box>
  );
};
export default Cards;
