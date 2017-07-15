import React from 'react';

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.showStream = this.showStream.bind(this);
  }

  showStream() {
    this.props.history.push(`/${this.props.videoId}`);
  }

  render() {
    return(
      <li onClick={this.showStream} className='thumbnail'>
        <div className='img-wrapper'>
          <img src={this.props.thumbnail} />
        </div>
        <span className='title'>{this.props.title}</span>
        <span className='channel'>{this.props.creator}</span>
      </li>
    )
  }
}

export default Thumbnail;
