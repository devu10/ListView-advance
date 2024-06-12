import React from "react";

export const UserForm = () => {
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };
  return (
    <div className="w-50 shadow-lg p-3 m-auto mt-5 rounded">
      <form action="">
        <div className="row g-2">
          <div className="col-md-3">
            <select
              name="gender"
              id="inputState"
              className="form-select"
              required
              defaultValue=""
              onChange={handleOnChange}
            >
              <option value="" selected>
                Choose...
              </option>
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
          </div>
          <div className="col-md-6">
            <input
              required
              name="name"
              type="text"
              className="form-control"
              placeholder="User Name"
              aria-label="User name"
              onChange={handleOnChange}
            />
          </div>
          <div className="col-md-3 d-grid">
            <button className="btn btn-primary">Add user</button>
          </div>
        </div>
      </form>
    </div>
  );
};
