import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { toast } from "react-toastify";
import { createquote } from "../functions/quote"
import { useSelector } from "react-redux";


const ContactUs = () => {
  const initialState = {
    name: "",
    email: "",
    desc: "",
  };

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setValues({ ...values, [name]: value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  const { name, email, desc } = values;

  const handleSubmit = () => {
    if(values?.name===""){
      toast.error("Name Required");
      return 
    }
    if(values?.email===""){
      toast.error("Email Required");
      return 
    }
    if(values?.desc===""){
      toast.error("Content Required");
      return 
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
     
    } else {
      toast.error("Incorrect email given");
      return 
    }


    createquote(values)
      .then((res) => {
        console.log(res);
        window.alert(`Thank you, We will reply you soon`);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        // if (err.response.status === 400) toast.error(err.response.data);
        toast.error(err.response.data.err);
      });
  };

  return (
    <div id="contact">
      <div class="container">
        <div class="section-title text-center">
          <h2>Contact Us</h2>
          <hr />
        </div>

        <div class="col-md-6">
          <h3>Contact Info</h3>
          <div class="contact-item">
            <span>Manufactured and packed by</span>
            <p>
              Edakkattu Furnitures,
              <br />
              Thadiyoor P.o, Thiruvalla
              <br />
              Pathanamthitta Dist <br />
              Kerala
            </p>
          </div>

          <div class="contact-item">
            <span>Address Line 2</span>
            <p>
              34,35 ,Balaji Layout,
              <br />
              Kothannur post
              <br />
              Bangalore-560077 <br />
            </p>
          </div>
          <div class="contact-item">
            <span>Phone</span>
            <p><b> +91 8590774213, +91 9947612356</b></p>
          </div>
        </div>
        <div class="col-md-6">
          <h5>Get a Quote?</h5>
          <br />

          <TextField
            id="outlined-basic"
            label="Name"
            name="name"
            // variant="outlined"
            size="small"
            style={{ width: "100%" }}
            inputProps={{ style: { fontSize: 14 } }} // font size of input text
            InputLabelProps={{ style: { fontSize: 14 } }}
            required={true}
            value={name}
            onChange={handleChange}
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Email"
            name="email"
            size="small"
            style={{ width: "100%" }}
            inputProps={{ style: { fontSize: 14 } }} // font size of input text
            InputLabelProps={{ style: { fontSize: 14 } }}
            required={true}
            value={email}
            onChange={handleChange}
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            name="desc"
            label="Write something"
            type="email"
            // variant="outlined"
            multiline
            rows={4}
            size="small"
            style={{ width: "100%" }}
            inputProps={{ style: { fontSize: 14 } }} // font size of input text
            InputLabelProps={{ style: { fontSize: 14 } }}
            required={true}
            value={desc}
            onChange={handleChange}
          />
          <br />
          <br />

          <Button
            variant="contained"
            color="primary"
            style={{ fontSize: "12px" }}
            onClick={() => handleSubmit()}
          >
            Write to us
          </Button>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
