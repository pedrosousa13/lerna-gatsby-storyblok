// packages/common/Heading.js
import React from "react";

function Heading({
  level = "1",
  title
}) {
  const Header = `h${level}`;
  return /*#__PURE__*/React.createElement(Header, null, title);
}

export default Heading;