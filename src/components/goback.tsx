import React from "react";
import Link from "next/link";

interface Props {
  text: string;
  linkPath: string;
}

export const Goback = ({ text, linkPath }: Props) => (
  <header>
    <Link href={linkPath}>
      <a>
        <h2>{text}</h2>
      </a>
    </Link>
  </header>
);
