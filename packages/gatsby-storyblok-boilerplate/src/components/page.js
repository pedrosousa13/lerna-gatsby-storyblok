import React from "react";
import { globalHistory } from "@reach/router";
import Components from "./components.js";
import SEO from "./utils/seo";
import SettingsContext from "../helpers/settingsContext";
import useQueryParams from "../helpers/useQueryParams";

const Page = props => {
  const queryParams = useQueryParams(globalHistory.location);

  return (
    <SettingsContext.Consumer>
      {({ settings }) => (
        <>
          <SEO
            title={props.story.name}
            pathname={props.story.slug === "home" ? "" : props.story.full_slug}
          />

          {props.blok.body &&
            props.blok.body.map(blok =>
              React.createElement(Components(blok.component), {
                key: blok._uid,
                blok: blok
              })
            )}
        </>
      )}
    </SettingsContext.Consumer>
  );
};

export default Page;
