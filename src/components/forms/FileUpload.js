import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Avatar, Button, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const FileUpload = ({ values, setValues, setLoading, checked }) => {
  const [srcImg, setSrcImg] = useState(null);
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: checked ? 16 / 8 : 3 / 2});
  const [result, setResult] = useState(null);

  const handleImage = async (event) => {
    setSrcImg(URL.createObjectURL(event.target.files[0]));
  };

  const getCroppedImg = async () => {
    try {
      const canvas = document.createElement('canvas');
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = crop.width;
  canvas.height = crop.height;
  const ctx = canvas.getContext('2d');

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height
  );
      const base64Image = canvas.toDataURL("image/jpeg");
      if (base64Image !== "data:,") {
        setResult(base64Image);
      }
    } catch (e) {
//handle error
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let allUploadedFiles = values?.images;
    axios
      .post(
        `${process.env.REACT_APP_API}/uploadimages`,
        { image: result },
        {
          headers: {
            authtoken: user ? user.token : "",
          },
        }
      )
      .then((res) => {
        setLoading(false);
        allUploadedFiles?.push(res.data);
        setValues({ ...values, images: allUploadedFiles });
        setResult(null);
        setImage(null);
        setSrcImg(null);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const { user } = useSelector((state) => ({ ...state }));

  const handleImageRemove = (public_id) => {
    setLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_API}/removeimage`,
        { public_id },
        {
          headers: {
            authtoken: user ? user.token : "",
          },
        }
      )
      .then((res) => {
        setLoading(false);
        const { images } = values;
        let filteredImages = images.filter((item) => {
          return item.public_id !== public_id;
        });
        setValues({ ...values, images: filteredImages });
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    },
  }));

  const classes = useStyles();

  return (
    <>
      <div className="container" fluid="md">
        <div className="mb-3" controlId="formBasicEmail">
          <div>
            {srcImg ? (
              <div>
                <ReactCrop
                  style={{ maxWidth: "80%" }}
                  src={srcImg}
                  onImageLoaded={setImage}
                  crop={crop}
                  onChange={setCrop}
                />
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  style={{ fontSize: "12px" }}
                  onClick={getCroppedImg}
                >
                  crop
                </Button>
              </div>
            ) : (
              values?.images?.length ? null :  <input type="file" accept="image/*" onChange={handleImage} />
            )}
            {result && (
              <div>
                <img
                  src={result}
                  alt="cropped image"
                  style={{ maxWidth: "80%" }}
                />
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  style={{ fontSize: "12px" }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        {values?.images &&
          values?.images?.map((image) => (
            <Badge
              badgeContent={"X"}
              color="primary"
              key={image.public_id}
              onClick={() => handleImageRemove(image.public_id)}
              style={{ cursor: "pointer" }}
            >
              <Avatar
                alt="Remy Sharp"
                src={image.url}
                className={classes.large}
              />
            </Badge>
          ))}
      </div>
      <br />
    </>
  );
};

export default FileUpload;
