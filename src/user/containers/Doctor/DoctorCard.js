import React, { Component } from "react";


class DoctorCard extends Component {
  render() {
    const { dataD } = this.props;
    console.log(dataD);

    return (
      <>
        <div class="container" id="doctorCard">
          <div class="banner-image"></div>
          <div class="wrapper">
            <h1>{dataD.name}</h1>
            <h3>{dataD.degree}</h3>
            <h3>{dataD.specialization}</h3>
            <h3>{dataD.desc}</h3>
            <p>{dataD.fees}</p>
          </div>
          <div class="button-wrapper">
            <button class="btn outline">DETAILS</button>
            <button class="btn fill">Book NOW</button>
          </div>
        </div>
      </>
    );
  }
}

export default DoctorCard;
