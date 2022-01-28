import React from "react";

const AdvCreateForm = ({ handleSubmit, handleChange, values }) => {
  // destructure
  const { title } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Advertisement name</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={handleChange}
        />
      </div>

      <br />
      <button className="btn btn-outline-info bg-primary">Save</button>
    </form>
  );
};

export default AdvCreateForm;
