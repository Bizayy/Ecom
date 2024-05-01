import React from "react";
import "./Newsletter.css";

export const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
      <p>Subscribe to our Newsletter and stay updated!</p>
      <div>
        <input type="email" placeholder="Your Email ID" />
        <button>SUBSCRIBE</button>
      </div>
    </div>
  );
};
