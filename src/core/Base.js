import React, {useEffect} from "react";
import { Link, withRouter } from "react-router-dom";
import Furnitures from "./Furnitures";
import CategoryDisplay from "./CategoryDisplay";
import NavBar from "./navBar/NavBar";
import Banner from "./Banner";
import UseStyles from "./UseStyles";
import { useLocation } from "react-router-dom";


const Base = () => {


  const classes = UseStyles();
  return (
    <div>
      {/* <NavBar/> */}
      <Banner />

      <div style={{ marginTop: "10%" }}>
        <div class="text-center center">
          <h2>New arrivals</h2>
          <hr />
        </div>

        <Furnitures />
      </div>

      <div style={{ marginTop: "10%" }}>
        <div class="text-center center">
          <h2>Category</h2>
          <hr />
        </div>

        <CategoryDisplay />
      </div>

      {/* <div id="services">
      <div class="container">
        <div class="col-md-10 col-md-offset-1 section-title text-center">
          <h2>Our Services</h2>
          <hr />
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-4 service">
            
            <img
              src="img/residential-design.jpg"
              class="img-responsive"
              alt="Project Title"
            />
            <h3>Residential Design</h3>
            <p>
              Residential design is a process that results in a new home.
              Architectural clients might experience confusion about this term
              because it represents several phases of the home design process.
              The process of residential design includes a contract that
              specifies details about design, construction and pricing
              obligations.
            </p>
          </div>
          <div class="col-xs-12 col-sm-4 service">
            
            <img
              src="img/office-design.jpg"
              class="img-responsive"
              alt="Project Title"
            />
            <h3>Office Design</h3>
            <p>
              Office design makes up all the components and elements of a
              workspace that are both decorative and functional. This might
              include features such as color choices, layout, lighting elements
              and connectivity between employees.
            </p>
          </div>
          <div class="col-xs-12 col-sm-4 service">
            
            <img
              src="img/commercial-design.jpg"
              class="img-responsive"
              alt="Project Title"
            />
            <h3>Commercial Design</h3>
            <p>
              Commercial interior design refers to interior design in commercial
              spaces. These include offices, retail stores, restaurants, lobbies
              and other public spaces.
            </p>
          </div>
        </div>
      </div>
    </div> */}

    
    </div>
  );
};

export default Base;
