import React from 'react';
import { Link } from 'react-router-dom';
import Registration from './Registration';

const Login = () => {
  return (
    <div style={{marginBottom: "200px"}}>
      <div className="container pt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                Login
              </div>
              <div className="card-body">
                {/* Login Form */}
                <form>
                  <div className="form-group">
                    <label htmlFor="loginEmail">Email address</label>
                    <input type="email" className="form-control" id="loginEmail" placeholder="Enter email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="loginPassword">Password</label>
                    <input type="password" className="form-control" id="loginPassword" placeholder="Password" />
                  </div>
                  <div className="container mt-3">
                  <button type="submit" className="btn btn-primary ">
                    Login
                  </button>
                  </div>
                  <div className="container mt-3">
                  <Link type="submit" >
                    Forgot Password?
                  </Link>
                  <Link to="/registration" className='px-3' >
                    Register
                  </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
