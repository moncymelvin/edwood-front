import { Typography, Box, Grid, Paper } from "@material-ui/core";
// import Link from "next/link";
import styles from "components/navBar/NavBar.module.scss";
const RenderMenu = ({
  classificationId,
  classificationImage,
  categoriesList,
  goToProductList,
  setMegaMenu,
}) => {
  const heads = (value, id) => {
    return (
      <Typography
        variant="p"
        className={styles.pointSpace}
        onClick={() => {
          goToProductList(value, classificationId, id), setMegaMenu(false);
        }}
      >
        <b>{value}</b>
      </Typography>
    );
  };

  const points = (value, categoryId, id) => {
    return (
      <Typography
        variant="p"
        className={styles.pointSpace}
        onClick={() => {
          goToProductList(value, classificationId, categoryId, id),
            setMegaMenu(false);
        }}
      >
        {value}
      </Typography>
    );
  };

  const renderSubCategories = (subcategories, categoryId) => {
    return (
      subcategories.length > 0 &&
      subcategories.map(
        (subcategory) =>
          subcategory.attributes.active &&
          points(subcategory.attributes.name, categoryId, subcategory.id)
      )
    );
  };

  const renderCategories = () => {
    return (
      categoriesList.length > 0 &&
      categoriesList.map(
        (category) =>
          category.attributes.active && (
            <Grid item xs={6} md={3}>
              <Box>
                <Grid container direction="column">
                  {heads(category.attributes.name, category.id)}
                  {renderSubCategories(
                    category.attributes.subcategories.data,
                    category.id
                  )}
                </Grid>
              </Box>
            </Grid>
          )
      )
    );
  };

  return (

      <Grid container>
        <Grid item xs={6} md={3}>
          <div className={styles.classImageDiv}>
            <img src={classificationImage} className={styles.classImage} />
          </div>
        </Grid>
        <Grid item xs={6} md={9}>
          <Grid container>{renderCategories()}</Grid>
        </Grid>
      </Grid>
   
  );
};

export default RenderMenu;
