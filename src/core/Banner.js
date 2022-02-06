import React, { useState, useEffect }  from "react";
import UseStyles from "./UseStyles";
import { getCategory } from "../functions/category";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import "../slick-theme.css";
import { getAdvs } from "../functions/adv"

const Banner = () => {
  const [category, setCategory] = useState({});
  const [advs, setAdvs] = useState([]);
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () =>
  getAdvs().then((c) => setAdvs(c.data));

const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
const isIpad = useMediaQuery({ query: "(max-width: 850px)" });
  const classes = UseStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    autoplay:true
  };
  return (
    <div>
    <Slider {...settings} autoplaySpeed={3000}>
     {advs?.map((item)=>{
       return  <img src={item?.images[0]?.url} style={{width:'100%',height:'100%'}}/>
     })}
    </Slider>
  </div>
  );
};

export default Banner;
