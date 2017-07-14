import React from 'react';
import Video from './video';
import Thumbnail from './thumbnail';

class StreamIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { streamList: [] }
    this.requestStream = this.requestStream.bind(this);
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
          maxResults: 1
      }
    }).then((response) => {
      let videos = []
      response.items.forEach( video => {
        videos.push(
          <Thumbnail title={video.snippet.title}
          creator={video.snippet.channelTitle}
          videoId={video.id.videoId}
          thumbnail={video.snippet.thumbnails.high.url}/>
        )
      });
      this.setState({ streamList: videos });
    })
  }

  compoafwdMount() {
    var GoogleAuth; // Google Auth object.
    // Load the API's client and auth2 modules.
    // Call the initClient function after the modules load.
    gapi.load('client:auth2', initClient);
    let scope = this;

    function initClient() {
      window.asdf = gapi.client.init({
          'apiKey': 'AIzaSyACExGb2UPEpF4FxI2OW7AH6MMxbKP-bNs',
          'clientId': '481538411291-cfgrieebjsehleej57mb1rg2hn2vh2dk.apps.googleusercontent.com',
          'scope': 'https://www.googleapis.com/auth/youtube.readonly',
          'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
      }).then(() => {
        gapi.client.youtube.channels.list({
          'part': 'snippet,contentDetails,statistics',
          'forUsername': 'GoogleDevelopers'
          // 'method': 'GET',
          // 'path': '/youtube/v3/channels',
          // 'params': {'part': 'snippet', 'mine': 'true'}
        }).then(() => {
          request.execute(function(response) {
            console.log(response);
          })
        })
      });
      // .then(function () {
      //     GoogleAuth = gapi.auth2.getAuthInstance();
      //
      //     // Listen for sign-in state changes.
      //     GoogleAuth.isSignedIn.listen(updateSigninStatus);
      // }).then(scope.requestStream);
    }
  }

  requestStream() {
    // Example 2: Use gapi.client.request(args) function
    console.log('asdf');
    var request = gapi.client.request({
      'method': 'GET',
      'path': '/youtube/v3/channels',
      'params': {'part': 'snippet', 'mine': 'true'}
    }).then(() => {
      request.execute(function(response) {
        console.log(response);
      })
    });
  }

  render() {
    return(
      <div className='stream-index'>
        <ul className='stream-list'>
          <li>
            {this.state.streamList}
          </li>
          <li>
            <div className='box'></div>
          </li>
          <li>
            <div className='box'></div>
          </li>
          <li>
            <div className='box'></div>
          </li>
        </ul>
      </div>
    )
  }
}

export default StreamIndex;
