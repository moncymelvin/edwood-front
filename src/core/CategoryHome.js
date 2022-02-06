import React, { useState, useEffect } from "react";
import { getCategory, getCategorySubs } from "../functions/category";
// import ProductCard from "../../components/cards/ProductCard";
import { Grid } from "@material-ui/core/";
import Pagination from "@material-ui/lab/Pagination";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Cards from "./Card";
import UseStyles from "./UseStyles";

const CategoryHome = ({ match }) => {
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const classes = UseStyles();
  const { slug } = match.params;

  useEffect(() => {
    setLoading(true);
    getCategory(slug).then((res) => {
      console.log(JSON.stringify(res.data, null, 4));
      setCategory(res.data.category);
      getSubCategory(res?.data?.category?._id);
      setProducts(res.data.products);
      setLoading(false);
    });
  }, [match.params]);

  const getSubCategory = (category) => {
    getCategorySubs(category).then((res) => {
      setSubCategory(res.data);
    });
  };

  return (
    <div>
      <div className={classes.productwrapper} style={{ marginTop: "5%" }}>
        <div style={{ textAlign: "center" }}>
          <h2>{category.name}</h2>
          <hr />
        </div>
        <Grid container alignItems="center">
          {subCategory?.length &&
            subCategory?.map((item, index) => {
              return (
                <Grid item lg={3} md={3} xs={6} key={index}>
                  <div
                    style={{
                      width: "80%",
                      backgroundColor: "red",
                      padding: "1px 1px 1px 15px",
                      borderRadius: "20px",
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <h5 style={{ color: "white" }}>{item?.name}</h5>
                      <ChevronRightIcon style={{ fontSize: "20px" }} />
                    </div>
                  </div>
                </Grid>
              );
            })}
        </Grid>
        <Grid container alignItems="center">
          {products?.map((product, index) => (
            <Grid
              item
              lg={4}
              md={4}
              xs={12}
              className={classes.products}
              key={index}
            >
              <Cards product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default CategoryHome;
