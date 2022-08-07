import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const MetaTag = ({ title, description }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Helmet>
    </HelmetProvider>
  );
};

export default MetaTag;
