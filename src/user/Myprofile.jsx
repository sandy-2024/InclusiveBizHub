import React from 'react';
import Usernav from "./Usernav";
import Profilepic from "./girl.png";

const Myprofile = ({ name = "Bijeta Dahal", email = "abc@inclusivebizhub.com", phone = "+61-0412345678" }) => {
  return (
    <>
      <Usernav />
      <div className="container profile-container mt-4">
        <div className="row align-items-center">
          <div className="col-md-3 text-center">
            <img
              src={Profilepic}
              alt="Profile Picture"
              className="img-fluid rounded-circle mb-3"
              style={{ width: '150px', height: '150px' }}
            />
          </div>
          <div className="col-md-8 text-center text-md-start">
            <h2>{name}</h2>
          </div>
        </div>
        <div className="row mt-3 justify-content-center">
          <div className="col-md-8">
            <ul className="list-group">
              <li className="list-group-item border-0">
                <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
              </li>
              <li className="list-group-item border-0">
                <strong>Phone:</strong> {phone}
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-4 mb-4 justify-content-center">
          <div className="col-md-8 text-center">
            <button className="btn btn-primary mr-2 mb-2">Edit Profile</button>
            <button className="btn btn-secondary mr-2 mb-2">Change Picture</button>
            <button className="btn btn-warning mb-2">Change Password</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myprofile;
