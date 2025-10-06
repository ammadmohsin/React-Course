import React from "react";

function ExpenseForm() {
  return (
    <form action="">
      <div className="mb-4">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input id="description" type="text" className="form-control" />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input id="amount" type="number" className="form-control" />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="form-label">
          Categories
        </label>
        <select name="" id="category" className="form-select">
          <option value="" className="form-select-option">
            Groceries
          </option>
          <option value="">Utilities</option>
          <option value="">Entertainment</option>
        </select>
      </div>
      <button className="btn btn-primary" type="submit">
        {" "}
        Submit{" "}
      </button>
    </form>
  );
}

export default ExpenseForm;
