import React from "react";
import Element from "./Element";
import Header from "./Header";
import Button from "./Button";
import { useState } from "react";
import ExpenceForm from "./ExpenceForm";

function Body() {
  const [blog, setBlog] = useState("Welcome to my new blog");
  const btn = "Click Above";
  const title = "Asiri Blog";

  const styles={
      border:"2px solid black",
      textAlign: "center",
  };
  return (
    <div>
      <legend style={styles}>
        <Header title={title} />
        <Element name={blog} />
        <Button name={btn} />
      </legend>
      <legend style = {styles}>
        <Header title={title} />
        <Element name={blog} />
        <Button name={btn} />
      </legend>

      <legend style = {styles}>
        <Header title={title} />
        <Element name={blog} />
        <Button name={btn} />
      </legend>
      <ExpenceForm/>
    </div>
  );
}

export default Body;
