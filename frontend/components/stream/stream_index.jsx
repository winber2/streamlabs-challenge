import React from 'react';
import Video from './video';
import Thumbnail from './thumbnail';

class StreamIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { streamList: [] }
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
          part: 'snippet',
          eventType: 'live',
      		type: 'video',
      		key: 'AIzaSyACExGb2UPEpF4FxI2OW7AH6MMxbKP-bNs',
      		q: 'league',
          maxResults: 6
      }
    }).then((response) => {
      let videos = []
      response.items.forEach( (video, idx)=> {
        videos.push(
          <Thumbnail key={idx}
            title={video.snippet.title}
            creator={video.snippet.channelTitle}
            videoId={video.id.videoId}
            thumbnail={video.snippet.thumbnails.high.url}/>
        )
      });
      this.setState({ streamList: videos });
    })
  }

  render() {
    return(
      <div className='stream-index'>
        <ul className='stream-list'>
          {this.state.streamList}
        </ul>
      </div>
    )
  }
}

export default StreamIndex;
