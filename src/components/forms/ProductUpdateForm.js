import React from "react";

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
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={description}
          onChange={handleChange}
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

      {/* <div>
        <label>Sub Categories</label>
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Please select"
          value={arrayOfSubs}
          onChange={(value) => setArrayOfSubs(value)}
        >
          {subOptions.length &&
            subOptions.map((s) => (
              <Option key={s._id} value={s._id}>
                {s.name}
              </Option>
            ))}
        </Select>
      </div> */}

      <br />
      <button className="btn btn-outline-info bg-primary">Save</button>
    </form>
  );
};

export default ProductUpdateForm;
