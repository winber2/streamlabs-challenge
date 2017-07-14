import React from 'react';

class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <article>
        <iframe src={`https://www.youtube.com/embed/${this.props.videoId}?ecver=2`} allowFullScreen/>
      </article>
    )
  }
}

export default Video;
