import React, { useState, useEffect } from "react";
import { getSub } from "../../functions/sub";
// import ProductCard from "../../components/cards/ProductCard";
import { Grid } from "@material-ui/core/";
import { useHistory } from "react-router-dom";
import Cards from "../../core/Card";
import UseStyles from "../../core/UseStyles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const SubHome = ({ match }) => {
  const [sub, setSub] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const classes = UseStyles();
  const { slug } = match.params;
  let history = useHistory();

  useEffect(() => {
    setLoading(true);
    getSub(slug).then((res) => {
      console.log(JSON.stringify(res.data, null, 4));
      setSub(res.data.sub);
      setProducts(res.data.products);
      setLoading(false);
    });
  }, [match.params]);

  return (
    <div>
      <div
        className={classes.productwrapper}
        style={{ paddingTop: "5%", paddingBottom: "10%" }}
      >
        <div style={{ textAlign: "center" }}>
          <h2>{sub.name}</h2>
          <hr />
        </div>

        <div
          style={{
            marginLeft: "10px",
            backgroundColor: "#232F3E",
            padding: "1px 1px 1px 15px",
            borderRadius: "20px",
            marginBottom: "15px",
            width:"140px"
          }}
        >
          <div
            onClick={() => history.goBack()}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <ChevronLeftIcon
              style={{
                fontSize: "25px",
                marginLeft: "10px",
                color: "white",
              }}
            />
            <h5 style={{ color: "white", marginLeft: "10px" ,paddingTop:"1px"}}>Back</h5>
          </div>
        </div>

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

export default SubHome;
