import React, { useState, useEffect } from "react";
import { getCategory } from "../functions/category";
// import ProductCard from "../../components/cards/ProductCard";
import { Grid } from "@material-ui/core/";
import Pagination from "@material-ui/lab/Pagination";
import Cards from "./Card";
import UseStyles from "./UseStyles";

const CategoryHome = ({ match }) => {
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const classes = UseStyles();
  const { slug } = match.params;

  useEffect(() => {
    setLoading(true);
    getCategory(slug).then((res) => {
      console.log(JSON.stringify(res.data, null, 4));
      setCategory(res.data.category);
      setProducts(res.data.products);
      setLoading(false);
    });
  }, [match.params]);

  return (
    <div>
      <div className={classes.productwrapper} style={{ marginTop: "5%" }}>
        <div style={{ textAlign: "center" }}>
          <h2>{category.name}</h2>
          <hr />
        </div>
        <Grid container alignItems="center">
          {products?.map((product) => (
            <Grid item lg={3} md={3} xs={6} className={classes.products}>
              <Cards product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default CategoryHome;
