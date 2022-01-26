import React, { useEffect, useState } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { getProductsByCount } from "../../../functions/product";
import { removeProduct } from "../../../functions/product";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Cards from "../../../core/Card";
import { Grid } from "@material-ui/core/";
import UseStyles from "../../../core/UseStyles";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  // redux
  const { user } = useSelector((state) => ({ ...state }));
  const classes = UseStyles();
  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = () => {
    setLoading(true);
    getProductsByCount(100)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleRemove = (slug) => {
    // let answer = window.confirm("Delete?");
    if (window.confirm("Delete?")) {
      // console.log("send delete request", slug);
      removeProduct(slug, user.token)
        .then((res) => {
          loadAllProducts();
          toast.error(`${res.data.title} is deleted`);
        })
        .catch((err) => {
          if (err.response.status === 400) toast.error(err.response.data);
          console.log(err);
        });
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col">
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4>All Products</h4>
          )}

          <div className={classes.productwrapper}>
            <Grid container alignItems="center">
              {products?.map((product) => (
                <Grid item lg={3} md={3} xs={6} className={classes.products}>
                  <Cards product={product} handleRemove={handleRemove} admin={true}/>
                </Grid>
              ))}
            </Grid>

            {/* <div style={{display:'flex',justifyContent: 'center',marginTop: '20px'}}>
        
<Pagination count={Math.round(productsCount / perPage)} page={page} onChange={(event, value) => setPage(value)} variant="outlined" shape="rounded" />
      </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
