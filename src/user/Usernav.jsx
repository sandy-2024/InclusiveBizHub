import React from "react";

import { Link } from "react-router-dom";

const Usernav = () => {
  return (
    <>
      <div style={{backgroundColor: "#d0d5db", height: 100}}>
      
      <ul class="nav nav-underline">
      <li class="nav-item">
<img src="./src/assets/logo.png"alt="InclusiveBizHub"
              height={130}
              width={130} />
              
              </li>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#" style={{marginTop: 40}}>Add Causes</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" style={{marginTop: 40}}>My Cause list</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" style={{marginTop: 40}}>Participations</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true" style={{marginTop: 40}}>Upcoming Events</a>
  </li>
  <li class="nav-item dropdown" style={{marginTop: 40, marginLeft: 800}}>
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Profile</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">My Profile</a></li>
      <li><a class="dropdown-item" href="#">Settings</a></li>
      <li><a class="dropdown-item" href="#">Logout</a></li>
    </ul>
  </li>
</ul>
      </div>
    </>
  );
};

export default Usernav;
