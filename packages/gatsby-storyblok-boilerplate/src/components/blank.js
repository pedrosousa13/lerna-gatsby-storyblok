import React from "react";
import Components from './components';
import SettingsContext from '../helpers/settingsContext';

const Blank = props => console.log("from blank") || (
  <SettingsContext.Consumer>
    {({ settings }) => (
      <>
        {props.blok.body &&
          props.blok.body.map(blok =>
            React.createElement(Components(blok.component), {
              key: blok._uid,
              blok: blok,
              settings
            })
          )}
      </>
    )}
  </SettingsContext.Consumer>
);

export default Blank;
