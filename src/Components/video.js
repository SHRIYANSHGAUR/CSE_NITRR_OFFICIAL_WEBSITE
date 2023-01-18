import React from 'react';
import './style.css';
import { useRef, useEffect, Fragment } from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';

function Video() {
  // return (
  // <div>
  {
    /* <div id="intro" class="bg-image vh-100 shadow-1-strong">
        <video
          style={{ minWidth: '100%', minHeight: '100%' }}
          playsinline
          autoplay
          muted
          loop
        >
          <source
            class="h-100"
            src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4"
            type="video/mp4"
          />
        </video>
      </div> */
  }
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.addEventListener(
      'contextmenu',
      function (e) {
        e.preventDefault();
      },
      false
    );

    return videoRef.current.removeEventListener(
      'contextmenu',
      function (e) {
        e.preventDefault();
      },
      false
    );
  }, []);

  return (
    <Fragment>
      <div ref={videoRef}>
        <ReactPlayer
          width="100%"
          height="auto"
          controls={true}
          class="videoWrapper"
          url={'https://www.youtube.com/watch?v=tSQVgiwr3lU'}
          config={{ file: { attributes: { controlsList: 'nodownload' } } }}
        />
      </div>
    </Fragment>

    // </div>
  );
}

export default Video;
