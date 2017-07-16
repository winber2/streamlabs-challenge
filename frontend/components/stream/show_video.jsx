import React from 'react';
import Slider from 'react-slick';
import Video from './video';
import Navigation from '../navigation/navigation';
import { values } from 'lodash';

class ShowVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: null,
      time: null,
      messagesPerSecond: 0,
      totalMessages: 0,
      activeUsers: 0,
      input: '',
      active: '',
      videos: [<div key={20}><img src='http://placekitten.com/g/400/200' /></div>],
      userSearch: []
     }
    this.chat = this.chat.bind(this);
    this.toggleOptions = this.toggleOptions.bind(this);
    this.userSearch = this.userSearch.bind(this);
    this.toVideo = this.toVideo.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.search('league');
    this.state.time = new Date();
    this.state.interval = setInterval( () => this.updateStats(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  updateStats() {
    let startTime = this.state.time;
    let time = (new Date() - startTime) / 1000;
    this.props.fetchChatroomMessages({ chatroomId: this.props.match.params.videoId })
      .then((messages) => {
        let activeUsers = 0;
        let users = {};
        let chatroomMessages = 0;
        let newMessages = values(messages.messages);
        newMessages.forEach( message => {
          if (new Date() - new Date(message.created_at) < 6000000) {
            if (!users[`${message.user}`]) {
              users[`${message.user}`] = message.user;
              activeUsers += 1;
            }
          }
          if (new Date() - new Date(message.created_at) < 4000) {
            chatroomMessages += 1;
          }
        })
        this.setState({
          totalMessages: newMessages.length,
          messagesPerSecond: chatroomMessages / 4,
          activeUsers: activeUsers
        });
      });
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

  toVideo(videoId) {
    return () => {
      window.scrollTo(0, 0);
      this.props.history.push(`${videoId}`);
    }
  }

  search(query) {
    $.ajax({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
          part: 'snippet',
          eventType: 'live',
          type: 'video',
          key: 'AIzaSyACExGb2UPEpF4FxI2OW7AH6MMxbKP-bNs',
          q: query,
          maxResults: 6
      }
    }).then((response) => {
      let videos = [];
      response.items.forEach( (video, idx) => {
        if (video.id.videoId === this.props.match.params.videoId) return;

        videos.push(
          <div key={idx} className='carousel-image-wrapper'>
            <img onClick={this.toVideo(video.id.videoId)} src={video.snippet.thumbnails.high.url} />
          </div>
        );
      });
      this.setState({ videos: videos });
    })
  }

  userSearch(e) {
    if (e.keyCode === 13) {
      let user = e.currentTarget.value;
      let chatroomId = this.props.match.params.videoId;
      let query = {
        name: user,
        chatroomId: chatroomId
      };
      let scope = this;
      this.props.fetchUserMessages(query)
        .then(() => this.renderMessages());
    }
  }

  renderMessages() {
    if (this.props.messages.messages) {
      let messages = [];
      values(this.props.messages.messages).forEach( (message, idx) => {
        messages.push(
          <div key={idx} className='message'>
            <span className='user'>{message.user}:</span><span className='message'>{message.content}</span>
          </div>
        );
      });
      this.setState({ userSearch: messages })
    }
  }

  toggleOptions() {
    if (this.state.active) {
      this.setState({ active: '' });
    } else {
      this.setState({ active: 'active' })
    }
  }

  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: false,
      draggable: false
    }
    return(
      <div className="video-show-page">
        <Navigation history={this.props.history} handleSubmit={() => 'i do nothing lol'} />
        <main className="video-wrapper">
          <Video videoId={this.props.match.params.videoId} />
          <aside className="chatroom-wrapper">
            <ul className='chatroom' id={this.props.match.params.videoId}></ul>
            <div className='chatroom-input-wrapper'>
              <input onKeyDown={this.chat} onChange={this.update('input')} value={this.state.input} placeholder='Say something!' className="chatroom-input"></input>
            </div>
          </aside>
        </main>
        <section className="video-recommendations">
          <div className='stream-options-wrapper'>
            <h2 onClick={this.toggleOptions}>Stream Options <div className={`stream-options-image ${this.state.active}`} /></h2>
            <div className={`stream-options ${this.state.active}`}>
              <table className='message-stats'>
                <tbody>
                  <tr>
                    <td>Messages / second:</td>
                    <td>{Math.round(this.state.messagesPerSecond)}</td>
                  </tr>
                  <tr>
                    <td>Total Messages:</td>
                    <td>{this.state.totalMessages}</td>
                  </tr>
                  <tr>
                    <td>Users participating:</td>
                    <td>{this.state.activeUsers}</td>
                  </tr>
                </tbody>
              </table>
              <ul className='user-search'>
                <input onKeyDown={this.userSearch} className='user-search' placeholder='Search chat by User!'/>
                {this.state.userSearch}
              </ul>
            </div>
          </div>
          <div className='border' />
          <h1>Related Videos</h1>
          <div className='carousel-container'>
            <Slider {...settings}>
              {this.state.videos}
            </Slider>
          </div>
        </section>
      </div>
    )
  }
}

export default ShowVideo;
