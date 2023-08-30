import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
const YoutubePlayer = ({ videoId }: any) => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  };
  const opts: YouTubeProps['opts'] = {
    width: '1080',
    height: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />;
};

export default YoutubePlayer;
