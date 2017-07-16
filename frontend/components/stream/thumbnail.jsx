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
      <li className='thumbnail'>
        <div onClick={this.showStream} className='img-wrapper'>
          <img src={this.props.thumbnail} />
        </div>
        <span className='title'>{this.props.title}</span>
      </li>
    )
  }
}

export default Thumbnail;
