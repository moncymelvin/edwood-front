import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import CancelIcon from "@material-ui/icons/Cancel";
import AutoFitImage from "react-image-autofit-frame";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "70%",
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
}));

const ProductDetailsModal = ({ open, product, handleClose }) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  // const { images, title, description, slug, price } = product;

  const body = (
    <div className="row" style={{ backgroundColor: "white" }}>
      <div
        style={{ position: "absolute", margin: "10px" }}
        onClick={() => handleClose()}
      >
        <CancelIcon style={{ fontSize: "25px",color: 'black' }} />
      </div>
      <div
        onClick={() =>
          window.open(
            product?.images && product?.images.length && product?.images[0].url,
            "_self"
          )
        }
      >
        <AutoFitImage
          // positionY="top"
          frameWidth="350px"
          frameHeight="230px"
          imgSrc={
            product?.images && product?.images.length && product?.images[0].url
          }
          imgSize="contain"
        />
      </div>
      <br />
      <div
        style={{
          color: "black",
          margin: "5px",
          width: "340px",
          padding: "10px",
        }}
      >
        {/* <b>{product?.title}</b>
        <br />
        Rs. {product?.price}
        <br /> <br /> */}
      <div dangerouslySetInnerHTML={{__html: product?.description}}></div><br />
        {/* {product?.description} <br /> */}
      </div>
    </div>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight:'14px'
      }}
    >
      {body}
    </Modal>
  );
};

export default ProductDetailsModal;
