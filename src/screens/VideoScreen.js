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
    ThumbnailImagePath: 'https://via.placeholder.com/150',
    YoutubeUrl: '1Boo311IVuc',
    Title: "nilaa's blog",
    ShortDescription: 'sweetjhbhjb',
    Description: 'hvjhvdchjd',
  },
  {
    ThumbnailImagePath: 'https://via.placeholder.com/250',
    YoutubeUrl: 'XS9kp88zC1U',
    Title: "nilaa's blog",
    ShortDescription: 'sweetjhbhjb',
    Description: 'hvjhvdchjd',
  },
  {
    ThumbnailImagePath: 'https://via.placeholder.com/350',
    YoutubeUrl: 'fWYM2k9Iscg',
    Title: "nilaa's blog",
    ShortDescription: 'sweetjhbhjb',
    Description: 'hvjhvdchjd',
  },
  {
    ThumbnailImagePath: 'https://via.placeholder.com/450',
    YoutubeUrl: 'nQHjjmIVjTU',
    Title: "nilaa's blog",
    ShortDescription: 'gfdgfdgfdgfdgfgfddg',
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
        YoutubeUrl: '1Boo311IVuc',
        Title: "nilaa's blog",
        ShortDescription: 'sweetjhbhjb',
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
            <Text h3>{Title}</Text>
            <Text h4>{ShortDescription}</Text>
            <Text h4 style={{marginTop: 10}} numberOfLines={expand ? 1 : null}>
              {Description}
            </Text>
          </View>
          <TouchableOpacity onPress={this._onPressExpand}>
            <Text>play</Text>
          </TouchableOpacity>
        </View>
        <View padd>
          <FlatList
            extraData={this.state.VideoDetails}
            showsVerticalScrollIndicator={false}
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
