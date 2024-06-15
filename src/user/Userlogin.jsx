import Usernav from "./Usernav";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Userlogin() {
  return (
    <>
      <div style={{ marginBottom: 60 }}>
        <Usernav />
        <div className="container d-flex flex-column align-items-center justify-content-center min-vh-50">
          <h3 className="text-center mb-4">Add causes that you want to participate in</h3>
          <div className="container-md">
            <div className="mb-3">
              <label htmlFor="causeSelect" className="form-label fw-bold">Select the cause</label>
              <select id="causeSelect" className="form-select" aria-label="Default select example">
                <option defaultValue>Select the cause</option>
                <option value="1">Environment Protection</option>
                <option value="2">Education For All</option>
                <option value="3">Health care Improvement</option>
                <option value="4">Poverty Alleviation</option>
                <option value="5">Gender Equality</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="amountInput" className="form-label fw-bold">Enter the amount</label>
              <input type="text" className="form-control" id="amountInput" placeholder="Amount in $" />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label fw-bold">Add your Identity document</label>
              <input className="form-control" type="file" id="formFile" />
            </div>
            <div className="form-floating mb-3">
              <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
              <label htmlFor="floatingTextarea" className="fw-bold">Remarks</label>
            </div>
            
            {/* Submit Cause button */}
            <button type="button" className="btn btn-primary btn-lg btn-block">Submit Cause</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Userlogin;
