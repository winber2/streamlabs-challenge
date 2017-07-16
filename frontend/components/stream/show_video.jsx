import React from 'react';
import Slider from 'react-slick';
import Video from './video';
import Navigation from '../navigation/navigation';

class ShowVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      active: '',
      videos: [<div key={20}><img src='http://placekitten.com/g/400/200' /></div>] }
    this.chat = this.chat.bind(this);
    this.toggleOptions = this.toggleOptions.bind(this);
  }

  componentDidMount() {
    this.search('league');
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
            <img src={video.snippet.thumbnails.high.url} />
          </div>
        );
      });
      this.setState({ videos: videos });
    })
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
      swipeToSlide: false
    }
    return(
      <div className="video-show-page">
        <Navigation history={this.props.history} />
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
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>Users participating:</td>
                    <td>25</td>
                  </tr>
                </tbody>
              </table>
              <ul className='user-search'>
                <input className='user-search' placeholder='Search chat by User!'/>
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
