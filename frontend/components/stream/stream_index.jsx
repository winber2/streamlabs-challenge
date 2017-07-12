import React from 'react';

class StreamIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='stream-index'>
        <ul className='stream-list'>
          <li>
            <div className='box'></div>
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
