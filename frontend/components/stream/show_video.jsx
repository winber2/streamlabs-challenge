import React from 'react';
import Video from './video';

class ShowVideo extends React.Component {
  constructor(props) {
    super(props);
    this.chat = this.chat.bind(this);
  }

  chat(e) {
    if (e.keyCode === 13) {
      let value = e.currentTarget.value;
      let chatroomId = this.props.match.params.videoId;
      App.static_pages.speak({ message: value, chatroomId: chatroomId });
    }
  }

  render() {
    return(
      <div className="video-show-page">
        <main className="video-wrapper">
          <Video videoId={this.props.match.params.videoId} />
          <aside className="chatroom-wrapper">
            <ul id={this.props.match.params.videoId}></ul>
            <input onKeyDown={this.chat} className="chatroom-input"></input>
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
