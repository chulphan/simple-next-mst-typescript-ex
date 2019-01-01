import React from "react";
import { observer, inject } from "mobx-react";
import { AlbumView } from "./albumView";

interface Props {
  store: {
    albums: any[];
    sortAlbumsAlphabetically(): any[];
  };
}

class Albums extends React.Component<Props> {
  state = {
    showAll: false,
    sortAlpha: false
  };

  handleShowAll = () => {
    this.setState({ showAll: true });
  };

  handleSortAlpha = () => {
    this.setState({ sortAlpha: !this.state.sortAlpha });
  };

  render() {
    const { store } = this.props;
    const { showAll, sortAlpha } = this.state;
    const sortedAlbums: any[] = sortAlpha
      ? store.sortAlbumsAlphabetically()
      : store.albums;
    const albums = showAll ? sortedAlbums : sortedAlbums.slice(0, 8);

    return (
      <div>
        <button onClick={() => this.handleSortAlpha()}>
          Sort Alphabetically
        </button>
        <section>
          {albums.map((album: any) => (
            <AlbumView key={album.id} album={album} />
          ))}
        </section>

        {!showAll && (
          <button onClick={() => this.handleShowAll()}>Show All</button>
        )}
      </div>
    );
  }
}

export default inject("store")(observer(Albums));
