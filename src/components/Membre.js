import React, { Fragment } from "react";

const Membre = ({ nom, age, children, cacherNom, handleChange }) => {
  return (
    <Fragment>
      <h2
        style={{
          backgroundColor: age < 10 ? "yellow" : "purple",
          color: age < 10 ? "black" : "white"
        }}
      >
        {nom.toUpperCase()} : {age}
      </h2>
      <input type="text" value={nom} onChange={handleChange} />
      <button onClick={cacherNom}>X</button>
      {children && <p>{children}</p>}
    </Fragment>
  );
};

export default Membre;
