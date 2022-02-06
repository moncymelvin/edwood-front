import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core/";
import Pagination from "@material-ui/lab/Pagination";
import { Link } from "react-router-dom";
import Cards from "./Card";
import UseStyles from "./UseStyles";
import { getProducts, getProductsCount } from "../functions/product";
import ProductDetailsModal from "./ProductDetailsModal"

export default function Furnitures() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productsCount, setProductsCount] = useState(0);
  const [page, setPage] = useState(1);

  const perPage = 12;
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
    <div className={classes.productwrapper}>
      <Grid container alignItems="center">
        {products?.map((product) => {
          return  <Grid item lg={4} md={4} xs={12} className={classes.products}>
              <Cards product={product} />
            </Grid>
        })}
      </Grid>
      <ProductDetailsModal/>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Link to={"/furnitures"}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ fontSize: "12px" }}
          >
            View All Furnitures
          </Button>
        </Link>
      </div>
    </div>
  );
}
