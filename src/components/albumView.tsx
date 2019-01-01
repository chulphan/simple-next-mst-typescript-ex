import React, { Fragment } from "react";
import Link from "next/link";

interface Props {
  album: {
    id: number;
    userId: number;
    title: string;
  };
}

export const AlbumView = ({ album }: Props) => (
  <article>
    <Fragment>
      <div>
        <img
          src={`https://picsum.photos/300/200/?random`}
          width={300}
          height={200}
        />
      </div>
      <Link href={{ pathname: "/album", query: { id: album.id } }}>
        <a>{album.title}</a>
      </Link>
    </Fragment>
  </article>
);
