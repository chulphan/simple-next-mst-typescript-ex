import React from "react";
import Link from "next/link";

interface Props {
  title: string;
  linkText: string;
  linkPath: string;
}

export const Header = ({ title, linkText, linkPath }: Props) => (
  <header>
    <h1>{title}</h1>
    <Link href={linkPath}>
      <a>
        <h2>{linkText}</h2>
      </a>
    </Link>
  </header>
);
