import React from "react";
import SbEditable from "storyblok-react";
import Components from "../components.js";

const Section = props => {
  return (
    <SbEditable content={props.blok}>
      <section className="section">
        <div className="container">
          {props.blok.title && <h4>{props.blok.title}</h4>}
          {(props.blok.content &&
            props.blok.content.map(blok => {
              return (
                <div key={blok._uid}>
                  {React.createElement(Components(blok.component), {
                    blok: blok
                  })}
                </div>
              );
            })) ||
            props.children}
        </div>
      </section>
    </SbEditable>
  );
};

export default Section;
