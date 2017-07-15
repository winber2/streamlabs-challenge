import React from 'react';

class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <article className='video'>
        <iframe src={`https://www.youtube.com/embed/${this.props.videoId}?ecver=2`} width='800' height='450' frameBorder='0' allowFullScreen/>
      </article>
    )
  }
}

export default Video;
