import Usernav from "./Usernav";


function Mypart() {
  return (
    <>
      <div>
        <Usernav />
        <div className="container mt-5">
          <ul className="list-group list-group-flush text-left">
            <li className="list-group-item d-flex justify-content-between">
              Environmental Protection
              <button className="btn btn-danger btn-sm">Delete</button>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              Education for all
              <button className="btn btn-danger btn-sm">Delete</button>
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
}

export default Mypart;