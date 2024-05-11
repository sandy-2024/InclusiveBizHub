import React from 'react'

const Footer = () => {
    const divStyle = {
        backgroundColor: '#3498db', // Background color (you can use any valid color value)
        // width: '200px',
        // height: '100px',
      };
  return (
    <>
    
      <div style={divStyle}>
      <hr/>
        <div className="row" style={divStyle}>
          <div className="col-12 text-center" style={divStyle}>
            <p>&copy; 2024 InclusiveBizHub. All rights reserved.</p>
          </div>
        </div>
      </div>
      </>
  )
}

export default Footer
