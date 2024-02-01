import React from "react";

function NewExpence() {
  const titleChangHandler = (event)=>{
    // console.log("Title Changed");
    console.log(event.target.value)
  }
  const amountChangeHandler = (event)=>{
    console.log(event.target.value)
  }
  return (
    <div>
      <form>
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            aria-describedby="emailHelp"
            placeholder="Enter title"
            onChange = {titleChangHandler}
          />
        </div>
        <div class="form-group">
          <label for="amount">Amount</label>
          <input
            onChange = {amountChangeHandler}
            type="number"
            class="form-control"
            id="amount"
            placeholder="Enter Amount"
          />
        </div>
        <div class="form-group">
          <label for="date">Date</label>
          <input
            type="date"
            min="2024-01-30"
            max="2024-02-14"
            class="form-control"
            id="date"
            placeholder="Date"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Add Expences
        </button>
      </form>
    </div>
  );
}

export default NewExpence;
