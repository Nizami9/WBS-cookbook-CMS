import React from "react";
import Reviews from "../reviews.json";
import "../footer.css"

function Footer() {
  let { reviews } = Reviews;

  return (
    <div className="footerComponent">
      <p>Footer</p>
      {reviews.map((r) => (
        <div>
          <h1>{r.quote}</h1>
          <p>{r.name}</p>
          <p>{r.year}</p>
        </div>
      ))}
    </div>
  );
}

export default Footer;
