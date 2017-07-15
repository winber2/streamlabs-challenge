import React from 'react';

class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <article>
        <iframe src={`https://www.youtube.com/embed/${this.props.videoId}?ecver=2`} width='640' height='320' allowFullScreen/>
      </article>
    )
  }
}

export default Video;
