import React from "react";
import Link from "next/link";

interface Props {
  post: {
    id: string;
    title: string;
    userId: string;
    body: string;
  };
}

export const PostView = ({ post }: Props) => (
  <article key={post.id}>
    <Link href={{ pathname: "/post", query: { id: post.id } }}>
      <div>
        <div>
          <img
            src="https://picsum.photos/300/200/?random"
            width={300}
            height={200}
          />
        </div>
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <p>by user: {post.userId}</p>
        </div>
      </div>
    </Link>
  </article>
);
