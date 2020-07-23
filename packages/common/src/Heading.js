// packages/common/Heading.js
import React from "react";

function Heading({ level = "1", title }) {
  const Header = `h${level}`;

  return <Header>{title}</Header>
}

export default Heading;
