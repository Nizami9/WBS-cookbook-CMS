import React from "react";
import Reviews from "../../reviews.json";

function Footer() {
  let { reviews } = Reviews;

  return (
    <div>
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
