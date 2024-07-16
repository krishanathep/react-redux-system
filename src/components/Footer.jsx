import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="d-sm-flex justify-content-center justify-content-sm-between">
          <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">
            Copyright © 2024{" "}
            <a href="https://full-stack-app.com/" target="_blank">
              Full-stack-app
            </a>
            . All rights reserved.
          </span>
          {/* <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
            Hand-crafted & made with <i class="mdi mdi-heart text-danger"></i>
          </span> */}
        </div>
      </footer>
    </>
  );
}
