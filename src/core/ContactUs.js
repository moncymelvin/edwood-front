import React from "react";
import { Button, TextField } from "@material-ui/core";

const ContactUs = () => {
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
            <span>Address</span>
            <p>
              Edakkattu Furnitures,
              <br />
              Thadiyoor P.o, Thiruvalla
              <br />
              Pathanamthitta Dist <br />
              Kerala
            </p>
          </div>
          {/* <div class="contact-item">
              <span>Email</span>
              <p>Edakkattu@gmail.com</p>
            </div> */}
          <div class="contact-item">
            <span>Phone</span>
            <p> +91 8590774213, +91 9947612356</p>
          </div>
        </div>
        <div class="col-md-6">
          <h5>Get a Quote?</h5>
          <br />
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            size="small"
            style={{ width: "100%" }}
            inputProps={{ style: { fontSize: 14 } }} // font size of input text
            InputLabelProps={{ style: { fontSize: 14 } }}
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            style={{ width: "100%" }}
            inputProps={{ style: { fontSize: 14 } }} // font size of input text
            InputLabelProps={{ style: { fontSize: 14 } }}
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Write something"
            variant="outlined"
            multiline
            rows={4}
            size="small"
            style={{ width: "100%" }}
            inputProps={{ style: { fontSize: 14 } }} // font size of input text
            InputLabelProps={{ style: { fontSize: 14 } }}
          />
          <br />
          <br />

          <Button
            variant="contained"
            color="primary"
            style={{ fontSize: "12px" }}
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
