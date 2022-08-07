import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function DetailPage() {
  const router = useRouter();

  const { newsId } = router.query;

  return (
    <Fragment>
      <h1>This is the detail page {newsId}</h1>

      <hr />

      <Link href="/news">
        <button>Click to go back</button>
      </Link>
    </Fragment>
  );
}

export default DetailPage;
