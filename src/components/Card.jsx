import React from "react";

function Card({ name, mail, mobileNo, img }) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{name}</h2>
          <img className="circle-img" src={img} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className="info">{mobileNo}</p>
          <p className="info">{mail}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
