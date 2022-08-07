import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

const LocalizedLink = ({ to, ...props }) => {
  const { t, i18n } = useTranslation("translations");

  return (
    <Link {...props} locale={i18n.language} href={to}>
      {props.children}
    </Link>
  );
};

export default LocalizedLink;
