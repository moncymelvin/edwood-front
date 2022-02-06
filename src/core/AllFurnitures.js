import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core/";
import Pagination from "@material-ui/lab/Pagination";
import Cards from "./Card";
import UseStyles from "./UseStyles";
import { getProducts, getProductsCount } from "../functions/product";
import { useLocation } from "react-router-dom";

export default function Furnitures() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productsCount, setProductsCount] = useState(0);
  const [page, setPage] = useState(1);

  const routePath = useLocation();
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [routePath]);


  const perPage = 16;
  useEffect(() => {
    loadAllProducts();
  }, [page]);

  useEffect(() => {
    getProductsCount().then((res) => setProductsCount(res.data));
  }, []);

  const loadAllProducts = () => {
    setLoading(true);
    // sort, order, limit
    getProducts("createdAt", "desc", page, perPage).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  };

  const classes = UseStyles();

  return (
    <div className={classes.productwrapper} style={{marginTop: '5%'}}>
      <div style={{ textAlign: "center" }}>
        <h2>All Furnitures </h2>
        <hr />
      </div>

      <Grid container alignItems="center">
        {products?.map((product) => {
          return product?.category?.name !== "adv" ? (
            <Grid item lg={4} md={4} xs={12} className={classes.products}>
              <Cards product={product} />
            </Grid>
          ) : null;
        })}
      </Grid>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px",paddingBottom: '10%' }}
      >
        <Pagination
          count={Math.round(productsCount / perPage)}
          page={page}
          onChange={(event, value) => setPage(value)}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </div>
  );
}
