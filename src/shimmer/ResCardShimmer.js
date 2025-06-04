import React from "react";
import "./styleShimmer.css";

const ResCardShimmer = () => (
  <div className="shimmer-list">
    {Array(8).fill("").map((_, i) => (
      <div className="shimmer-card" key={i}>
        <div className="shimmer-img shimmer-animate"></div>
        <div className="shimmer-line shimmer-animate"></div>
        <div className="shimmer-line shimmer-animate short"></div>
      </div>
    ))}
  </div>
);

export default ResCardShimmer;