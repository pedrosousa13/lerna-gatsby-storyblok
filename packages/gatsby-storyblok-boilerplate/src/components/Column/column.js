import React from "react";
import SbEditable from "storyblok-react";
import Components from "../components";

const Column = props => (
  <SbEditable content={props.blok}>
    <div className={`col`}>
      {(props.blok.components &&
        props.blok.components.map(blok =>
          React.createElement(Components(blok.component), {
            key: blok._uid,
            blok: blok
          })
        )) ||
        props.children}
    </div>
  </SbEditable>
);

export default Column;
