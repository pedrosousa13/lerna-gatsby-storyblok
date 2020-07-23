import React from "react";
import Layout from "./layout";
import BlankLayout from "./blankLayout";
import { SettingsContextProvider } from "../helpers/settingsContext";

export default ({ children, pageContext }) => {
  const settings = Object.assign({}, pageContext.globalSettings);
  if (typeof settings.content === "string") {
    settings.content = JSON.parse(settings.content);
  }

  if (pageContext.layout === "blank") {
    return <BlankLayout pageContext={pageContext}>{children}</BlankLayout>;
  }
  return (
    <SettingsContextProvider settings={settings}>
      <Layout pageContext={pageContext}>{children}</Layout>
    </SettingsContextProvider>
  );
};
