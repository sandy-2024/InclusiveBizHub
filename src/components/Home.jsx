import React from "react";




const Home = () => {
  const containerStyle = {
    width: "700px", // Adjust this value based on your preferred width
    minHeight: "300px", // Set a minimum height if needed
    margin: "auto", // Center the container horizontally
    marginTop: "20px", // Add top margin as needed
    padding: "20px", // Add padding as needed
    borderRadius: "20px",
    opacity: 1, // Optional: Add border radius for rounded corners
  };

  

  return (
    <>
      <div className="container text-center mt-3" style={containerStyle}>
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
      
      <div className="container text-center mt-5" style={containerStyle}>
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
