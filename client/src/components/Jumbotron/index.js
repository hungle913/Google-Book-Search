import React from "react";

function Jumbotron({ children }) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Google-Book-Search</h1>
        <p className="lead">Search for and save books of Interest!</p>
      </div>
    </div>
  );
}

export default Jumbotron;

