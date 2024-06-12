import React from 'react';
import { Link } from 'react-router-dom';

const SocialCauses = () => {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://cdn.shopify.com/s/files/1/0564/9321/1807/articles/1._anh_bia_2b83c021-34fe-465e-8a3c-520e5c73e9c5.jpg?v=1701595625" className="card-img-top" alt="Environment Protection" />
            <div className="card-body">
              <h5 className="card-title">Environment Protection</h5>
              <p className="card-text">Environmental protection is the practice of protecting the natural environment by individuals, groups and governments.</p>
              <Link to="/login" className="btn btn-primary">
                Learn more
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV_YemtxMCpa19VRnqKlwrnXE2yYgKVIXakg&s" className="card-img-top" alt="Education for all" />
            <div className="card-body">
              <h5 className="card-title">Education for all</h5>
              <p className="card-text">Education is the basic building block of every society.</p>
              <Link to="/login" className="btn btn-primary">
                Learn more
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5yrFawHqcdKpYscC8WHPG4lTTvgoHNL5z8g&s" className="card-img-top" alt="Healthcare Improvement" />
            <div className="card-body">
              <h5 className="card-title">Healthcare Improvement</h5>
              <p className="card-text">Quality improvement is the framework used to systematically improve care.</p>
              <Link to="/login" className="btn btn-primary">
                Learn more
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ8uPZyfjmgKWgqFMjAjP8esSMRWsN_juYtA&s" className="card-img-top" alt="Poverty alleviation" />
            <div className="card-body">
              <h5 className="card-title">Poverty alleviation</h5>
              <p className="card-text">Poverty reduction, poverty relief, or poverty alleviation is a set of measures, both economic and humanitarian, that are intended to permanently lift people out of poverty.</p>
              <Link to="/login" className="btn btn-primary">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialCauses;
