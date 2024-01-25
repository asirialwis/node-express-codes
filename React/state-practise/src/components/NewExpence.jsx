import React from "react";

function NewExpence() {
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
          />
          
        </div>
        <div class="form-group">
          <label for="amount">Amount</label>
          <input
            type="number"
            class="form-control"
            id="amount"
            placeholder="Enter Amount"
          />
        </div>
        <div class="form-group">
          <label for="date">Date</label>
          <input type="date" class="form-control" id="date"placeholder="Date" />
          </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewExpence;
