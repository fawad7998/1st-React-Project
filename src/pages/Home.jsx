import React from 'react';

function Home() {
  return (
    <>
      <div className="container ">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Enter Your Text Here
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary">ENTER HERE</button>
      </div>
    </>
  );
}
export default Home;
