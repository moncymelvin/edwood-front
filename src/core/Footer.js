import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <div class="container text-center">
        <div class="social">
          <ul>
            <li>
              <a href="https://www.facebook.com/edwood.furnitures.5">
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
            &copy; 2022 Edakkattu Furnitures. Some rights reserved. Powered by
            mcode3
            {/* <a href="https://mcode3.co.in" rel="nofollow"> */}
            {/* </a> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
