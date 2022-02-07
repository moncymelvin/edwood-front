import React, { useEffect, useState } from "react";
import { getProduct } from "../functions/product";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Grid } from "@material-ui/core/";

const Product = ({ match }) => {
  const [product, setProduct] = useState({});
  const { slug } = match.params;

  useEffect(() => {
    loadSingleProduct();
  }, [slug]);

  const loadSingleProduct = () => {
    getProduct(slug).then((res) => {
      setProduct(res.data);
      // load related
    });
  };

  return (
    <div style={{ paddingTop: "5%" }}>
       <Grid container>
       <Grid item lg={7} md={7} xs={12}>
          {product?.images && product?.images.length && (
            <Carousel showArrows={true} autoPlay infiniteLoop>
              {product?.images &&
                product?.images.map((i) => (
                  <div onClick={() => window.open(i.url, "_self")}>
                    <img
                      alt="img"
                      src={i.url}
                      key={i.public_id}
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                ))}
            </Carousel>
          )}
          </Grid>

          <Grid item lg={5} md={5} xs={12} style={{padding:'5px 25px 25px 25px'}}>
          <div
            style={{
              color: "black",
            }}
          >
            <div
              dangerouslySetInnerHTML={{ __html: product?.description }}
            ></div>
            <br />
          </div>
          </Grid>
        </Grid>
    </div>
  );
};

export default Product;
