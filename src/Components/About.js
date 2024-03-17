import React, { Component } from 'react';
import iframe from 'react-iframe';
import ResPDF from "../resume.pdf";
class About extends React.Component {
  onResumeClick() {
    window.open(ResPDF);
  }
                render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Chas Huggins Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <div style={{ marginBottom: 10 }}>
              {bio &&
                bio.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city}, {state} {zip}
                  </span>
                  <br />
                  <span id="phone-number">
                    <a href="tel:631-983-7235" style={{ color: `11abb0` }}>
                      {phone}
                    </a>
                  </span>
                  <br />
                  <a
                    href="mailto:hugginsc10@gmail.com"
                    className="fa fa-envelope"
                    style={{ marginRight: 18}}
                  >
                    hugginsc10@gmail.com
                  </a>
                </p>
              </div>
              <div
                className="columns download"
                style={{ justifyContent: "space-between 10px" }}
              >
                <a href={resumeDownload} className="button" download>
                  <i className="fa fa-download"></i>Download Resume
                </a>
                <button
                  className="button"
                  onClick={() => window.open(ResPDF, "_blank")}
                >
                  <i className="fa fa-eye"></i> View Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
