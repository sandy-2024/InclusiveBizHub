import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  const buttonStyle = {
    margin: '0 10px', // Add some space between buttons
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const blueButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'blue',
    color: 'white',
  };

  const lightBlueButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'lightblue',
    color: 'black',
  };

  return (
    <>
      <div className="container text-center mt-3">
        <div
          style={{
            color: "Black",
            fontSize: 40,
            fontFamily: "Inter",
            fontWeight: "900",
          }}
        >
          Introducing <span style={{color: "#092792", fontSize: 50,}}> InclusiveBizHub </span>
          
        </div>
      </div>
      
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Link to="/login" className="btn btn-primary m-2">Join us</Link>
        <Link to="/SocialCauses" className="btn btn-secondary m-2">See Causes</Link>
      </div>

      <div className="container text-center mt-5">
        <div
          style={{
            color: "black",
            fontSize: 22,
            fontFamily: "Inter",
            fontWeight: "300",
          }}
        ><span style={{color: "black", backgroundColor: "white"}}>
          InclusiveBizHub is a forward-thinking company with a clear mission: to create meaningful impact through digital engagement and community empowerment. Our project goals and objectives reflect our commitment to driving positive change on both local and global scales. 
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;