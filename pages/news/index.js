import Link from "next/link";
import React, { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>This is the news page</h1>

      <p>Hi there some text to describe the news.</p>

      <hr />

      <Link href="/news/abas-ghadery">
        <button className="btn btn-primary">Click</button>
      </Link>
    </Fragment>
  );
}

export default NewsPage;
