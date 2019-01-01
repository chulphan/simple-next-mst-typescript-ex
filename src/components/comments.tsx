import React from "react";
import { observer, inject } from "mobx-react";
import { PostView } from "./postView";

interface Props {
  postId: string;
  store?: any;
}

class Comments extends React.Component<Props> {
  render() {
    const { store, postId } = this.props;
    const post = store.getPost(parseInt(postId));

    return (
      <div>
        <div>
          <PostView post={post} />
        </div>
        <ul>
          {post.comments.map(comment => (
            <li key={comment.id}>
              <img src="http://tachyons.io/img/avatar-mrmrs.jpg" />
              <p>{comment.body}</p>
              <div>
                <span>{comment.email}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default inject("store")(observer(Comments));
