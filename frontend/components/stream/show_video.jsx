import React from 'react';
import Video from './video';

class ShowVideo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    return(
      <div className="video-show-page">
        <main className="video-wrapper">
          <Video videoId={this.props.match.params.videoId} />
          <aside className="chatroom-wrapper">
            <ul id={this.props.match.params.videoId}></ul>
          </aside>
        </main>
        <section className="video-description">
          <p>asdjhfkladhgjklasgjkl</p>
        </section>
      </div>
    )
  }
}

export default ShowVideo;
