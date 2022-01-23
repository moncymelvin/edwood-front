import React from "react";
import { Link, withRouter } from "react-router-dom";
import Furnitures from "./Furnitures";
import NavBar from "./navBar/NavBar"
import Banner from "./Banner";
import UseStyles from "./UseStyles";

const Base = ()=>{
  const classes = UseStyles();
return(
  <div>
   
   <NavBar/>
   <Banner/>

    <div id="portfolio">
      <div>
        <div class="section-title text-center center">
          <h2>Our Furnitures</h2>
          <hr />
        </div>

        <Furnitures />
      </div>
    </div>


    <div id="services">
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
    </div>

    <div id="contact">
      <div class="container">
        <div class="section-title text-center">
          <h2>Contact Us</h2>
          <hr />
        </div>
        <div class="col-md-4"></div>
        <div class="col-md-8">
          <h3>Contact Info</h3>
          <div class="contact-item">
            
            <span>Address</span>
            <p>
              4321 Thadiyoor,
              <br />
              Kerala, CA 12345
            </p>
          </div>
          <div class="contact-item">
            
            <span>Email</span>
            <p>edwood@gmail.com</p>
          </div>
          <div class="contact-item">
            
            <span>Phone</span>
            <p> +91 8075904751</p>
          </div>
        </div>
      </div>
    </div>

    <div id="footer">
      <div class="container text-center">
        <div class="social">
          <ul>
            <li>
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-pinterest"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p>
            &copy; 2020 EdWOOD. Some rights reserved. Powered by
            <a href="https://mcode3.co.in" rel="nofollow">
              mcode3
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
)};

export default Base;
