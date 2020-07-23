import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";

// Since DOM elements <a> cannot receive activeClassName,
// destructure the prop here and pass it only to GatsbyLink
const Link = ({
  storyblokLink,
  children,
  activeClassName,
  target,
  ...other
}) => {
  // Use Gatsby Link for internal links, and <a> for others
  if (storyblokLink.linktype === "story") {
    return (
      <GatsbyLink
        to={`/${
          storyblokLink.cached_url === "home" ? "" : storyblokLink.cached_url
        }`}
        activeClassName={activeClassName}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }
  return target === "_blank" ? (
    <OutboundLink
      href={storyblokLink.url}
      target="_blank"
      rel="noopener"
      {...other}
    >
      {children}
    </OutboundLink>
  ) : (
    <a href={storyblokLink.url} {...other}>
      {children}
    </a>
  );
};

export default Link;
