import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <div className="container pl-3 pt-5">
      <div className="card" style={{ width: '18rem' }}>
        <img src="./src/assets/map.png" className="card-img-top" alt="map of office" />
        <div className="card-body">
          <h5 className="card-title">Location of Company</h5>
          <p className="card-text">Please visit as per the route.</p>
          <Link to="https://www.google.com/maps/@27.6794062,85.3207418,16.5z?entry=ttu" className="btn btn-primary">
            Go to corporate office
          </Link>
        </div>
      </div>
      </div>
    </>
  )
}

export default Contact
