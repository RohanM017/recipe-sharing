import React from "react";

const RecipeCard = ({ image, name, description }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img 
        src={image} 
        className="card-img-top img-fluid"
        alt={name} 
        style={{
          width: "100%", 
          height: "200px",  // ✅ Ensures all images have the same height
          objectFit: "cover" // ✅ Prevents image distortion
        }} 
      />
      <div className="card-body">
        <h5 className="card-name">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
