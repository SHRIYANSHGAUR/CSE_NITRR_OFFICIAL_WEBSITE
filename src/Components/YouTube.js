import React from 'react';
import './style.css';
import { useRef, useEffect, Fragment } from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';

const YouTube = (props) => {
  var videoSrc =
    'https://www.youtube.com/embed/' +
    props.video +
    '?autoplay=' +
    props.autoplay +
    '&rel=' +
    props.rel +
    '&modestbranding=' +
    props.modest;
  return (
    <div className="container1">
      <iframe
        className="player1"
        type="text/html"
        width="100%"
        height="100%"
        src={videoSrc}
        frameborder="0"
      />
    </div>
  );
};

export default YouTube;
