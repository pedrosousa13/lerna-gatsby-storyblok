import React from "react";
import SbEditable from "storyblok-react";
import Components from "../components.js";

const Row = props => {
  return (
    <SbEditable content={props.blok}>
      <div className="row">
        {(props.blok.columns &&
          props.blok.columns.map(blok =>
            React.createElement(Components(blok.component), {
              key: blok._uid,
              blok: blok
            })
          )) ||
          props.children}
      </div>
    </SbEditable>
  );
};

export default Row;
