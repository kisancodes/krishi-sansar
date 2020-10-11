import React, {Component} from 'react';
import {
  View,
  LayoutAnimation,
  Platform,
  UIManager,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';

import {withNavigationFocus} from '@react-navigation/compat';
// import {YoutubePlayer, VideoPlayList} from '../../chamchami-components';
import YoutubePlayer from '../components/RCTYouTube';
import VideoPlayList from '../components/PlayListCard';
import Header from '../components/ui/Header';
import {useIsFocused} from '@react-navigation/native';
let videoId = ['XS9kp88zC1U', 'bs3snp-7x-c', 'fWYM2k9Iscg', 'nQHjjmIVjTU'];

let videos = [
  {
    ThumbnailImagePath: 'http://i3.ytimg.com/vi/KtC3BC6T5uY/hqdefault.jpg',
    YoutubeUrl: 'vW7mbAhA4rI',
    Title: 'western agriculture',
    ShortDescription: '2018 Compilation Video featuring several',
    // Description: 'hvjhvdchjd',
  },
  {
    ThumbnailImagePath: 'http://i3.ytimg.com/vi/FNn5DB1Zen4/hqdefault.jpg',
    YoutubeUrl: 'FNn5DB1Zen4',
    Title: 'Modern Technology Agriculture Huge Machines',
    ShortDescription: 'planetapes',
    Description: 'hvjhvdchjd',
  },
  {
    ThumbnailImagePath: 'http://i3.ytimg.com/vi/mYalJjtK9tY/hqdefault.jpg',
    YoutubeUrl: 'mYalJjtK9tY',
    Title: 'TAFE Western Agriculture',
    ShortDescription: 'TAFE Western support agricultural industries ',
    Description: 'hvjhvdchjd',
  },
  {
    ThumbnailImagePath: 'http://i3.ytimg.com/vi/B3U5oYgXUIc/hqdefault.jpg',
    YoutubeUrl: 'B3U5oYgXUIc',
    Title: 'WOW! Amazing Agriculture Technology - Sweet & Chili Peppers',
    ShortDescription: 'TSK-24',
    Description: 'hvjhvdchjd',
  },
  {
    ThumbnailImagePath: 'http://i3.ytimg.com/vi/S3tYjmzkH4s/hqdefault.jpg',
    YoutubeUrl: 'S3tYjmzkH4s',
    Title: 'Cool and Powerful Agriculture Machines ',
    ShortDescription: 'TSK-24',
    Description: 'hvjhvdchjd',
  },
  {
    ThumbnailImagePath: 'http://i3.ytimg.com/vi/l4u8wZqOfXc/hqdefault.jpg',
    YoutubeUrl: 'l4u8wZqOfXc',
    Title: 'agriculture technology in Japan for modern cultivation of rice',
    ShortDescription:
      'this is an example of how Japanese people use modern technology',
    Description: 'hvjhvdchjd',
  },
];

class VideoPlayerScreen extends Component {
  constructor() {
    super();
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = {
      expand: true,
      youTubeUrl: null,
      VideoDetails: {
        YoutubeUrl: 'KtC3BC6T5uY',
        Title: 'Potato Harvest 2020',
        ShortDescription: 'Korean garderner',
        Description: 'hvjhvdchjd',
      },
    };
  }
  // componentWillUnmount() {
  // }
  _onPressExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState((prevState) => ({expand: !prevState.expand}));
  };

  _onPressVideo = (item) => {
    this.setState({VideoDetails: item});
  };

  _renderVideos = ({item}) => {
    // const VideoDetails = this.props.navigation.getParam('VideoDetails');
    const {ThumbnailImagePath, Title, ShortDescription, YoutubeUrl} = item;
    return (
      <VideoPlayList
        onPress={() => this._onPressVideo(item)}
        thumbnailImage={ThumbnailImagePath}
        title={Title}
        shortDescription={ShortDescription}
      />
    );
  };
  componentWillUnmount() {}
  render() {
    const {isFocused} = this.props;
    console.log('foxused=>', isFocused);
    // const VideoDetails = this.props.navigation.getParam('VideoDetails');
    const {
      YoutubeUrl,
      Title,
      ShortDescription,
      Description,
    } = this.state.VideoDetails;
    const {expand} = this.state;
    // const {videos} = this.props.VideosState;
    return isFocused ? (
      <View style={{flex: 1}}>
        <Header title="Videos" />
        <YoutubePlayer videoId={YoutubeUrl} />
        <View
          style={{
            padding: 10,
            borderBottomWidth: 0.5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 16,
                lineHeight: 19,
              }}>
              {Title}
            </Text>
            <Text
              style={{
                color: '#959595',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 14,
                lineHeight: 16,
              }}>
              {ShortDescription}
            </Text>
            {/* <Text h4 style={{marginTop: 10}} numberOfLines={expand ? 1 : null}>
              {Description}
            </Text> */}
          </View>
          {/* <TouchableOpacity onPress={this._onPressExpand}>
            <Text>play</Text>
          </TouchableOpacity> */}
        </View>
        <View style={{flex: 1}}>
          <FlatList
            extraData={this.state.VideoDetails}
            showsVerticalScrollIndicator={true}
            data={videos}
            renderItem={this._renderVideos}
            keyExtractor={(item) => item.YoutubeUrl}
          />
        </View>
      </View>
    ) : null;
  }
}

export default withNavigationFocus(VideoPlayerScreen);
