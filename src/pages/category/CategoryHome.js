import React, { useState, useEffect } from "react";
import { getCategory, getCategorySubs } from "../../functions/category";
// import ProductCard from "../../components/cards/ProductCard";
import { Grid } from "@material-ui/core/";
import Pagination from "@material-ui/lab/Pagination";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";
import Cards from "../../core/Card"
import UseStyles from "../../core/UseStyles"

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
      <div
        className={classes.productwrapper}
        style={{ paddingTop: "5%", paddingBottom: "10%" }}
      >
        <div style={{ textAlign: "center" }}>
          <h2>{category.name}</h2>
          <hr />
        </div>
        <Grid container alignItems="center">
          {subCategory?.length ?
            subCategory?.map((item, index) => {
              return (
                <Grid item lg={3} md={3} xs={6} key={index}>
                  <div
                    style={{
                      // width: "80%",
                      marginRight: "10%",
                      marginLeft: "10%",
                      backgroundColor: "#232F3E",
                      padding: "1px 1px 1px 15px",
                      borderRadius: "20px",
                      marginBottom: "10%",
                    }}
                  >
                    <Link to={`/sub/${item.slug}`}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          cursor: "pointer",
                        }}
                      >
                        <h5 style={{ color: "white", marginLeft: "10px" }}>
                          {item?.name}
                        </h5>

                        <ChevronRightIcon
                          style={{
                            fontSize: "25px",
                            marginRight: "10px",
                            color: "white",
                          }}
                        />
                      </div>
                    </Link>
                  </div>
                </Grid>
              );
            }):null}
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
