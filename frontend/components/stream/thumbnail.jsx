import React from 'react';

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <article>
        <img src={this.props.thumbnail} />
      </article>
    )
  }
}

export default Thumbnail;
