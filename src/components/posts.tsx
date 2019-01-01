import React from "react";
import { observer, inject } from "mobx-react";
import { PostView } from "./postView";

interface Post {
  id: string;
  userId: string;
  title: string;
  body: string;
  comments: any[];
}

interface Props {
  store: {
    posts: Post[];
    getAllPostUserIds(): number[];
    getPostByUserId(id: number): Post[];
  };
}

class Posts extends React.Component<Props> {
  state = {
    showAll: false,
    selectedFilter: "1"
  };

  handleShowAll = () => {
    this.setState({ showAll: true });
  };

  handleFilterChange(event: any) {
    const { value } = event.target;

    this.setState({ selectedFilter: value });
  }

  render() {
    const { store } = this.props;
    const { showAll, selectedFilter } = this.state;
    const allUserIds = store.getAllPostUserIds();
    const posts = showAll
      ? store.posts
      : store.getPostByUserId(parseInt(selectedFilter));

    return (
      <section>
        <label>Viewing All Posts By </label>
        <select onChange={e => this.handleFilterChange(e)}>
          {allUserIds.map(id => (
            <option value={id} key={id}>
              User: {id}
            </option>
          ))}
        </select>
        {posts.map((post: Post) => (
          <PostView key={post.id} post={post} />
        ))}

        {!showAll && (
          <button onClick={() => this.handleShowAll()}>Show all</button>
        )}
      </section>
    );
  }
}

export default inject("store")(observer(Posts));
