import React from 'react';
import Video from './video';

class ShowVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' }
    this.chat = this.chat.bind(this);
  }

  chat(e) {
    if (e.keyCode === 13) {
      if (!this.props.currentUser) return;
      let value = e.currentTarget.value;
      let chatroomId = this.props.match.params.videoId;
      App.static_pages.speak({
        message: value,
        chatroomId: chatroomId,
        user: this.props.currentUser.name,
        uid: this.props.currentUser.uid
      });
      this.setState({ input: '' });
    }
  }

  update(prop) {
    return e => this.setState({ input: e.currentTarget.value });
  }

  render() {
    return(
      <div className="video-show-page">
        <main className="video-wrapper">
          <Video videoId={this.props.match.params.videoId} />
          <aside className="chatroom-wrapper">
            <ul className='chatroom' id={this.props.match.params.videoId}></ul>
            <div className='chatroom-input-wrapper'>
              <input onKeyDown={this.chat} onChange={this.update('input')} value={this.state.input} className="chatroom-input"></input>
            </div>
          </aside>
        </main>
        <section className="video-recommendations">
          <p>asdjhfkladhgjklasgjkl</p>
        </section>
      </div>
    )
  }
}

export default ShowVideo;
