import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { getquotes } from "../../../functions/quote";

const Requirement = () => {
  const [quote, setQuote] = useState([]);
  // step 1

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () => getquotes().then((c) => setQuote(c.data));

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col-md-6">
          <h4>Requirements</h4>
          {quote?.map((item) => {
            return (
              <div
                style={{
                  marginBottom: "10px",
                  backgroundColor: "#f6f8e8",
                  padding: "10px",
                }}
              >
                <b> Name:</b> {item?.name} <br />
                <b> Email:</b> {item?.email}
                <br />
                <b> Requirement:</b> {item?.desc}
                <br />
              </div>
            );
          })}

          {console.log("quote===", quote)}
        </div>
      </div>
    </div>
  );
};

export default Requirement;
