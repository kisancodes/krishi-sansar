import React from 'react';
import {View, PixelRatio, StatusBar} from 'react-native';
import YouTube from 'react-native-youtube';
// import Setting from '../../config/setting';

class RCTYouTube extends React.PureComponent {
  state = {
    isReady: false,
    status: null,
    quality: null,
    error: null,
    isPlaying: true,
    isLooping: true,
    duration: 0,
    currentTime: 0,
    fullscreen: false,
    containerMounted: false,
    containerWidth: null,
    height: 205,
  };

  handleReady = () => {
    // const tabh = PixelRatio.roundToNearestPixel(this.state.containerWidth / (16 / 9));
    const h = 201;
    setTimeout(() => this.setState({height: h, isReady: true}), 2000);
  };

  render() {
    const VIDEO_ID = this.props.videoId;
    return (
      <View
        onLayout={({
          nativeEvent: {
            layout: {width},
          },
        }) => {
          if (!this.state.containerMounted)
            this.setState({containerMounted: true});
          if (this.state.containerWidth !== width)
            this.setState({containerWidth: width});
        }}>
        {this.state.containerMounted && (
          <YouTube
            apiKey={'AIzaSyAk1B44jYIHHJxuT5RL8AeiB1Dg0ME76Vk'}
            videoId={VIDEO_ID}
            ref={(component) => {
              this._youTubeRef = component;
            }}
            play={this.state.isPlaying}
            loop={this.state.isLooping}
            fullscreen={this.state.fullscreen}
            controls={1}
            style={[{height: this.state.height}, {alignSelf: 'stretch'}]}
            onError={(e) => this.setState({error: e.error})}
            onReady={this.handleReady}
            onChangeState={(e) => this.setState({status: e.state})}
            onChangeQuality={(e) => this.setState({quality: e.quality})}
            onChangeFullscreen={(e) =>
              this.setState({fullscreen: e.isFullscreen})
            }
            onProgress={(e) =>
              this.setState({
                duration: e.duration,
                currentTime: e.currentTime,
              })
            }
          />
        )}
      </View>
    );
  }
}

export default RCTYouTube;
