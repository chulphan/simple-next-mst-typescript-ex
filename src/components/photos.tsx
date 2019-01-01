import React from "react";
import { observer, inject } from "mobx-react";

interface Props {
  albumId: string;
  store?: any;
}

class Photos extends React.Component<Props> {
  render() {
    const { store, albumId } = this.props;
    const album = store.getAlbum(parseInt(albumId));

    return (
      <div>
        {album.photos.map(image => (
          <div>
            <a>
              <img src={image.url} />
              <span />
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default inject("store")(observer(Photos));
