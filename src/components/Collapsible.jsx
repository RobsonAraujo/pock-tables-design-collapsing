import React from "react";

const Collapsible = ({ children, open }) => {
  return <>{open && children}</>;
};

export default Collapsible;
