import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ProductUpdateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleCategoryChange,
  categories,
  subOptions,
  arrayOfSubs,
  setArrayOfSubs,
  selectedCategory,
  handleDescriptionChange
}) => {
  // destructure
  const {
    title,
    description,
    price,
    category,
    subs,
    shipping,
    quantity,
    images,
    colors,
    brands,
    color,
    brand,
  } = values;

  const handleEnter = (event) => {
    if (event.key.toLowerCase() === "enter") {
      const form = event.target.form;
      const index = [...form].indexOf(event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
      </div>

     

      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          name="price"
          className="form-control"
          value={price}
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
      </div>


      <div className="form-group">
        <label>Category</label>
        <select
          name="category"
          className="form-control"
          onChange={handleCategoryChange}
          value={selectedCategory ? selectedCategory : category._id}
        >
          {categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>

        <div>
          <label>Sub Categories</label>

          <select
          name="category"
          className="form-control"
          onChange={(e) => setValues({ ...values, subs: e.target.value })}
        >
          <option>Please select</option>
          {subOptions?.length > 0 &&
            subOptions?.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
        </div>
      <br />

      <div className="form-group">
        <label>Description</label><br/>
        <ReactQuill theme="snow" name="description" value={description} onChange={handleDescriptionChange}/>

      </div>

      

      <br />
      <button className="btn btn-outline-info bg-primary">Save</button>
    </form>
  );
};

export default ProductUpdateForm;
