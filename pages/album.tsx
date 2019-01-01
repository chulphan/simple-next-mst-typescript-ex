import React, { Fragment } from "react";
import { Provider } from "mobx-react";
import { rehydrateStore, initStore } from "../src/utils/rehydrateStore";
import Photos from "../src/components/photos";
import { getAlbumPhotos, getAlbumById } from "../src/utils/fetcher";
import { Goback } from "../src/components/goback";
import Helmet from "react-helmet";

interface Props {
  initialState: any;
  isServer: boolean;
  albumId: string;
}

export default class AlbumPage extends React.Component<Props> {
  store: any;

  static async getInitialProps({ req, query }) {
    const albumId = query.id;
    const album = await getAlbumById(albumId);
    const photos = await getAlbumPhotos(albumId);
    album.photos = photos;

    const init = await initStore(!!req, { albums: [album] });

    if (req) {
      Helmet.renderStatic();
    }

    return {
      title: `${album.title}`,
      desc: `desc for ${album.title}`,
      initialState: init.initialState,
      albumId
    };
  }

  constructor(props) {
    super(props);
    this.store = rehydrateStore(this.props.initialState);
  }

  render() {
    const { albumId, title, desc } = this.props;

    return (
      <Provider store={this.store}>
        <Fragment>
          <Helmet
            meta={[
              { property: "og:title", content: title },
              { property: "og:description", content: desc }
            ]}
          />
          <Goback text="Go back to all Albums" linkPath={`/`} />
          <Photos albumId={albumId} />
        </Fragment>
      </Provider>
    );
  }
}
