import React, { Fragment } from "react";
import { Provider } from "mobx-react";
import { rehydrateStore, initStore } from "../src/utils/rehydrateStore";
import Comments from "../src/components/comments";
import { getPostComments, getPostById } from "../src/utils/fetcher";
import { Goback } from "../src/components/goback";
import Helmet from "react-helmet";

interface Props {
  initialState: any;
  isServer: boolean;
  postId: string;
}

export default class PostPage extends React.Component<Props> {
  store: any;

  static async getInitialProps({ req, query }) {
    const postId = query.id;
    const post = await getPostById(postId);
    const comments = await getPostComments(postId);
    post.comments = comments;

    const init = await initStore(!!req, { posts: [post] });

    if (req) {
      Helmet.renderStatic();
    }

    return {
      initialState: init.initialState,
      postId,
      title: post.title,
      desc: post.body
    };
  }

  constructor(props) {
    super(props);
    this.store = rehydrateStore(this.props.initialState);
  }

  render() {
    const { postId, title, desc } = this.props;

    return (
      <Provider store={this.store}>
        <Fragment>
          <Helmet
            meta={[
              { property: "og:title", content: title },
              { property: "og:description", content: desc }
            ]}
          />
          <Goback text="Go back to all Posts" linkPath="/posts" />
          <Comments postId={postId} />
        </Fragment>
      </Provider>
    );
  }
}
