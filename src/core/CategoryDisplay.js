import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core/";
import Pagination from "@material-ui/lab/Pagination";
import { Link } from "react-router-dom";
import Cards from "./Card";
import UseStyles from "./UseStyles";
import { getCategories } from "../functions/category";

export default function CategoryDisplay() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCategories().then((c) => {
      setCategories(c.data);
      setLoading(false);
    });
  }, []);
  const classes = UseStyles();

  const categoryCard = (categorie) => {
    return (
      <div
        style={{
          backgroundImage: `url(${categorie?.images[0]?.images[0]?.url})`,
          // width: "90%",
          marginLeft: "5%",
          marginRight: "5%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            background: "rgba(0, 0, 0, 0.6)",
            height: "100%",
            width: "100%",
            borderRadius: "20px",
          }}
        >
          <div
            className={classes.fontSize}
            style={{
              textAlign: "center",
              paddingTop: "15%",
              paddingBottom: "20%",
              color: "white",
              fontWeight: "500",
            }}
          >
            <h3
              style={{
                color: "white",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0px 5px 0px 5px",
                fontWeight: "600",
              }}
            >
              {categorie?.name}
            </h3>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={classes.productwrapper}>
      <Grid container alignItems="center">
        {categories?.map((categorie) => {
          return (
            <Grid
              item
              lg={3}
              md={3}
              xs={6}
              className={classes.products}
              style={{ marginBottom: "2%" }}
            >
              <Link to={`/category/${categorie.slug}`}>
                {categoryCard(categorie)}
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
