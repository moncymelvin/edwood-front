import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core/";
import Cards from "./Card";
import UseStyles from "./UseStyles";
import { Pagination } from "antd";
import { getProducts, getProductsCount } from "../functions/product"

export default function Furnitures() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productsCount, setProductsCount] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadAllProducts();
  }, [page]);

  useEffect(() => {
    getProductsCount().then((res) => setProductsCount(res.data));
  }, []);

  const loadAllProducts = () => {
    setLoading(true);
    // sort, order, limit
    getProducts("createdAt", "desc", page).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  };

  const classes = UseStyles();
  const uri1 =
  "https://i5.walmartimages.com/asr/2b2f7011-075e-41c6-b5f6-fa46ffcb070a_1.4dedb76fa9c76be3ac888f25eae85ca8.jpeg";

  const uri2 = "https://www.weaverfurnituresales.com/wp-content/uploads/2018/01/laurel-victorian-bed.jpg";

  const uri3="https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd633af54/images/700000/704909.jpg?sfrm=jpg"

  const uri4="https://www.decornation.in/wp-content/uploads/2020/09/wooden-sofa-set.jpg"

  const uri5="https://www.royaloakindia.com/uploads/ROYIND-royaloak-melborne-sofa-3s-120.webp"

  return (
    <div className={classes.productwrapper}>

  
    <Grid container alignItems="center" >

    {products.map((product) => (
      <Grid item lg={3} md={3} xs={6} className={classes.products}>
        <Cards product={product}/>
      </Grid>
            ))}


    
   </Grid>

   <div className="row">
        <nav className="col-md-4 offset-md-4 text-center pt-5 p-3">
          <Pagination
            current={page}
            total={(productsCount / 3) * 10}
            onChange={(value) => setPage(value)}
          />
        </nav>
      </div>
   </div>
  );
}
