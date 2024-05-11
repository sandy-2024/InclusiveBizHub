import React, { useState } from "react";
import { Link } from "react-router-dom";

const SocialCauses = () => {
  const [rate, setRate] = useState();
  const [benef, setBenef] = useState();
  const [charge, setCharge] = useState();
  

  const updateNepal = () => {
    setRate(88.5);
    setBenef("Rate for Nepal is Npr");
    setCharge("The service charge is $2.99");
  };

  const updateIndia = () => {
    setRate(55.5);
    setBenef("Rate for India is Inr");
    setCharge("The service charge is $4.00");
  };

  const updateBangladesh = () => {
    setRate(72.1);
    setBenef("Rate for Bangladesh is Bdt");
    setCharge("The service charge is $4.00");
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-center mt-3">
        <div className="card" style={{ width: "50%" }}>
          <h1 className="text-center">Welcome to City Express Australia</h1>
          <br />
          <br />
          <h4 className="text-center mt-4">Amount</h4>

          <input
            type="text"
            className="form-control mx-auto d-block"
            aria-label="Amount (to the nearest dollar)"
            style={{ width: "50%" }}
          />

          <br />
          <div className="dropdown mt-3 text-center mx-auto d-block">
            <Link
              className="nav-link dropdown-toggle mx-auto d-block"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Country
            </Link>
            <ul className="dropdown-menu text-center">
              <li>
                <Link
                  className="dropdown-item text-center"
                  onClick={updateNepal}
                >
                  Nepal
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link
                  className="dropdown-item text-center"
                  onClick={updateIndia}
                >
                  India
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
              <Link
                  className="dropdown-item text-center"
                  onClick={updateBangladesh}
                >
                  Bangladesh
                </Link>
              </li>
            </ul>
          </div>
          <h5 className="mt-4 text-center">
            {benef} {rate}
          </h5>
          <h5 className='mt-3 text-center'>{charge}</h5>
          <button
            type="button"
            className="btn btn-success mt-3 mb-3 mx-auto d-block"
            style={{ width: "50%" }}
          >
            Send Money
          </button>
        </div>
      </div>
    </>
  );
};

export default SocialCauses;
