import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <NavLink to={"/"} className="nav-item">
            <a class="nav-link">
              <i className="mdi mdi-home menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </a>
          </NavLink>
          <NavLink to={"/example"} className="nav-item">
            <a class="nav-link">
              <i className="mdi mdi-chart-pie menu-icon"></i>
              <span className="menu-title">Example</span>
            </a>
          </NavLink>
          <li className="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#auth"
              aria-expanded="false"
              aria-controls="auth"
            >
              <i className="mdi mdi-account menu-icon"></i>
              <span className="menu-title">User Pages</span>
              <i className="menu-arrow"></i>
            </a>
            <div class="collapse" id="auth">
              <ul className="nav flex-column sub-menu">
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="#">
                    {" "}
                    Login 1{" "}
                  </a>
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="#">
                    {" "}
                    Login 2{" "}
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a class="nav-link" href="/assets/documentation/documentation.html">
              <i className="mdi mdi-file-document-box-outline menu-icon"></i>
              <span className="menu-title">Documentation</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
