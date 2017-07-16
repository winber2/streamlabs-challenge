import React from 'react';
import Thumbnail from './thumbnail';
import Navigation from '../navigation/navigation';

class StreamIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { streamList: [], search: 'league'};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.search('league');
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
      response.items.forEach( (video, idx)=> {
        videos.push(
          <Thumbnail key={idx}
            title={video.snippet.title}
            creator={video.snippet.channelTitle}
            videoId={video.id.videoId}
            thumbnail={video.snippet.thumbnails.high.url}
            history={this.props.history}
            query={this.state.search} />
        );
      });
      this.setState({ streamList: videos });
    })
  }

  handleSubmit(e) {
    if (e.keyCode === 13) {
      this.search(e.currentTarget.value);
    }
  }

  render() {
    return(
      <div className='stream-index'>
        <Navigation handleSubmit={this.handleSubmit} history={this.props.history} />
        <h1 className='search'>Search Results for '{this.state.search}'</h1>
        <ul className='stream-list'>
          {this.state.streamList}
        </ul>
      </div>
    )
  }
}

export default StreamIndex;
