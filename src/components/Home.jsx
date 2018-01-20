import React from 'react';

export const Home = () => (
  <div>
    <div className="jumbotron">
      <div className="container">
        <h1>React firebase playground</h1> A Single Page Application built using
        React and firebase
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <h4>React</h4>
        <p>A JavaScript library for building user interfaces</p>
        <p>
          <a className="btn btn-info" href="https://reactjs.org/">
            More info »
          </a>
        </p>
      </div>
      <div className="col-md-6">
        <h4>Firebase</h4>
        <p>Build apps fast, without managing infrastructure</p>
        <p>
          <a className="btn btn-info" href="https://firebase.google.com/">
            More info »
          </a>
        </p>
      </div>
    </div>
  </div>
);
