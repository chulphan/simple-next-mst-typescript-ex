import React, { Fragment } from "react";
import { Provider } from "mobx-react";
import { getPosts } from "../src/utils/fetcher";
import { rehydrateStore, initStore } from "../src/utils/rehydrateStore";
import Posts from "../src/components/posts";
import { Header } from "../src/components/header";
import Helmet from "react-helmet";

interface Props {
  initialState: any;
  isServer: boolean;
}

export default class PostsPage extends React.Component<Props> {
  store: any;

  static async getInitialProps({ req }) {
    const isServer = !!req;
    const posts = await getPosts();

    if (req) {
      Helmet.renderStatic();
    }

    const init = await initStore(isServer, {
      posts: posts.filter((post: any) => !!post.userId)
    });

    return {
      initialState: init.initialState,
      title: `Post List`
    };
  }

  constructor(props: Readonly<Props>) {
    super(props);
    this.store = rehydrateStore(this.props.initialState);
  }

  render() {
    const { title } = this.props;

    return (
      <Provider store={this.store}>
        <Fragment>
          <Helmet meta={[{ property: "og:title", content: title }]} />
          <Header title="Posts" linkPath="/" linkText="Albums" />
          <Posts />
        </Fragment>
      </Provider>
    );
  }
}
