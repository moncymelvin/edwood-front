import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import FileUpload from "../../../components/forms/FileUpload";
import AdvCreateForm from "../../../components/forms/AdvCreateForm";
import AdminNav from "../../../components/nav/AdminNav";
import { createAdv,getAdvs, removeAdv } from "../../../functions/adv";
import { Grid } from "@material-ui/core/";

const initialState = {
  title: "",
  images: [],
};

const AdvCreate = () => {
  const [values, setValues] = useState(initialState);
  const [subOptions, setSubOptions] = useState([]);
  const [showSub, setShowSub] = useState(false);
  const [loading, setLoading] = useState(false);
  const [advs, setAdvs] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadCategories();
  }, []);

  const handleRemove = async (slug) => {
    // let answer = window.confirm("Delete?");
    // console.log(answer, slug);
    if (window.confirm("Delete?")) {
      setLoading(true);
      removeAdv(slug, user.token)
        .then((res) => {
          setLoading(false);
          toast.error(`Advertisement deleted`);
          loadCategories();
        })
        .catch((err) => {
          if (err.response.status === 400) {
            setLoading(false);
            toast.error(err.response.data);
          }
        });
    }
  };

  const loadCategories = () =>
  getAdvs().then((c) => setAdvs(c.data));
  // redux
 

  const handleSubmit = (e) => {
    e.preventDefault();
    createAdv(values, user.token)
      .then((res) => {
        console.log(res);
        window.alert(`"${res.data.title}" Advertisement is created`);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        // if (err.response.status === 400) toast.error(err.response.data);
        toast.error(err.response.data.err);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col-md-10">
          {loading ? <h4>Loading</h4> : <h4>Advertisement create</h4>}

          {/* {JSON.stringify(values.images)} */}

          <div className="p-3">
            <FileUpload
              values={values}
              setValues={setValues}
              setLoading={setLoading}
              checked={true}
              loading={loading}
            />
          </div>
          <AdvCreateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            values={values}
          />
          <br/><br/>
         
            {advs?.map((item)=>{
              return(
               
                <div style={{borderWidth: '2px',borderColor: 'black',marginBottom: '20px'}}>
                  <img src ={item?.images[0]?.url} height="150px"/>
                  <div>{item?.title}</div>
                  <div className="text-danger" style={{cursor: 'pointer'}} onClick={() => handleRemove(item?.slug)}>Remove</div>
                </div>
              
              )
            })}
           
        </div>
      </div>
    </div>
  );
};

export default AdvCreate;
