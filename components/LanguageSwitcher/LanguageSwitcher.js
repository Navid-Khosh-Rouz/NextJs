import { useRouter } from "next/router";
import React from "react";
import { Translate } from "react-bootstrap-icons";
import Button from "../UI/Button/Button";

const LanguageSwitcher = (props) => {
  const router = useRouter();
  const { pathname, asPath, query, locale, locales } = router;
  const changeTo = (c) => {
    console.log(c);
    router.push({ pathname, query }, asPath, { locale: c });
  };

  return (
    <div {...props}>
      {locales.map((c) => {
        if (c !== locale) {
          return (
            <Button
              key={`switch-language-key-${c}`}
              className="btn btn-outline-light text-uppercase"
              onClick={(e) => changeTo(c)}
            >
              <Translate /> {c}
            </Button>
          );
        }
      })}
    </div>
  );
};

export default LanguageSwitcher;
