import React from 'react';

const Registration = () => {
  return (
    <div className="row justify-content-center mt-4" style={{marginBottom: "200px"}}>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            Register
          </div>
          <div className="card-body">
            {/* Registration Form */}
            <form>
              <div className="form-group">
                <label htmlFor="registerName">Full Name</label>
                <input type="text" className="form-control" id="registerName" placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label htmlFor="registerEmail">Email address</label>
                <input type="email" className="form-control" id="registerEmail" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label htmlFor="registerPassword">Password</label>
                <input type="password" className="form-control" id="registerPassword" placeholder="Password" />
              </div>
              <div className="container mt-3">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
