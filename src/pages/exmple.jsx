import React from "react";

const Exmple = () => {
  return (
    <>
      <div className="content-wrapper">
        <div className="row">
          <div className="col-md-12 grid-margin">
            <div className="d-flex justify-content-between flex-wrap">
              <div className="d-flex align-items-end flex-wrap">
                <div className="mr-md-3 mr-xl-5">
                  <h2>Welcome back,</h2>
                  <p className="mb-md-0">Your analytics dashboard template.</p>
                </div>
                <div className="d-flex">
                  <i className="mdi mdi-home text-muted hover-cursor"></i>
                  <p className="text-muted mb-0 hover-cursor">
                    &nbsp;/&nbsp;Dashboard&nbsp;/&nbsp;
                  </p>
                  <p className="text-primary mb-0 hover-cursor">Example</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <p className="card-title">Example page</p>
                <p class="mb-4">
                  To start a blog, think of a topic about and first brainstorm
                  party is ways to write details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exmple;
