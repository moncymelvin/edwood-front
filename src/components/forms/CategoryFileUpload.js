import React from "react";
import Resizer from "react-image-file-resizer";
import axios from "axios";
import { useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import { makeStyles } from "@material-ui/core/styles";

const FileUpload = ({ values, setValues, setLoading,checked }) => {
  const { user } = useSelector((state) => ({ ...state }));

  const fileUploadAndResize = (e) => {
    // console.log(e.target.files);
    // resize
    let files = e.target.files; // 3
    let allUploadedFiles = values;

    if (files) {
      setLoading(true);
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          checked?1080:720,
          checked?1080:720,
          "JPEG",
          100,
          0,
          (uri) => {
            // console.log(uri);
            axios
              .post(
                `${process.env.REACT_APP_API}/uploadimages`,
                { image: uri },
                {
                  headers: {
                    authtoken: user ? user.token : "",
                  },
                }
              )
              .then((res) => {
                console.log("IMAGE UPLOAD RES DATA", res);
                setLoading(false);
                allUploadedFiles.push(res.data);
                setValues({images: allUploadedFiles });
              })
              .catch((err) => {
                setLoading(false);
                console.log("CLOUDINARY UPLOAD ERR", err);
              });
          },
          "base64"
        );
      }
    }
    // send back to server to upload to cloudinary
    // set url to images[] in the parent component state - ProductCreate
  };

  const handleImageRemove = (public_id) => {
    setLoading(true);
    // console.log("remove image", public_id);
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
        console.log(err);
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
console.log("values==",values?.images)
  return (
    <>
      

      <div className="row">
        {values.images &&
          values.images.map((image) => (
            <Badge
        badgeContent={"X"}
        color="primary"
        key={image.public_id}
        onClick={() => handleImageRemove(image.public_id)}
        style={{ cursor: "pointer" }}
      >
        <Avatar alt="Remy Sharp" src={image.url} className={classes.large} />
      </Badge>
          ))}
      </div>

      {values?.images?.length ? null: <div className="row">
        <label className="btn btn-primary btn-raised mt-3">
         
          <input
            type="file"
            hidden
            accept="images/*"
            onChange={fileUploadAndResize}
          />
        </label>
       
      </div>}
     


      <br/>
    </>
  );
};

export default FileUpload;
