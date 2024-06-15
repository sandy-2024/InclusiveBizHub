import React from 'react'

const About = () => {
  return (
    <div className="container pt-5" style={{marginBottom: "300px"}}>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About Company
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      InclusiveBizHub is dedicated to fostering a just and equitable world. Our commitment is to support those who champion the cause of social, racial, and cultural harmony through our platform, resources, and community initiatives. At InclusiveBizHub, we believe that every voice matters. We invite you to join us in our mission to create a more inclusive, equitable, and just world. Together, we can make a difference.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Our Team
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Our team of skilled developers, designers, and project managers collaborate to deliver high-quality websites that not only showcase the identity of your brand but also provide seamless user experiences. Whether you're looking for a responsive website, an e-commerce platform, or a sophisticated mobile application, S and S Tech Company is dedicated to transforming your ideas into reality.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Corporate social Responsibility
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Welcome to InclusiveBizHub's CSR Commitment</strong> At InclusiveBizHub, our mission is to empower individuals and communities advocating for social, racial, and cultural justice. We believe in creating a platform that not only amplifies voices but also actively contributes to positive change in society. Our CSR strategy is built on the principles of inclusivity, equity, and community support.
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default About
