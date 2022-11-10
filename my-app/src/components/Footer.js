import React from "react";
<<<<<<< HEAD
import Reviews from "../reviews.json";
import "../footer.css"
=======
import Reviews from "../Reviews.json";
import "./footer.css"
>>>>>>> aa80823 (style flex footer)

function Footer() {
  let { reviews } = Reviews;

  return (
    <div className="footerComponent">
      <p></p>
      {reviews.map((r) => (
        <div>
          <h3>{r.quote}</h3>
          <p>{r.name}</p>
          <p>{r.year}</p>
        </div>
      ))}
    </div>
  );
}

export default Footer;
