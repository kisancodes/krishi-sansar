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
// import {YoutubePlayer, VideoPlayList} from '../../chamchami-components';
import YoutubePlayer from '../components/RCTYouTube';
import VideoPlayList from '../components/PlayListCard';
import Header from '../components/ui/Header';

// import {View, Text, Icon} from '../../components';
// import {RegExr} from '../../services';
// import {connect} from 'react-redux';
// import styles from './styles';
let videoId = ['XS9kp88zC1U', 'bs3snp-7x-c', 'fWYM2k9Iscg', 'nQHjjmIVjTU'];

let videoId = [
  {
    ThumbnailImagePath: 'http://i3.ytimg.com/vi/01cc5or1728/hqdefault.jpg',
    YoutubeUrl: '01cc5or1728',
    Title: 'naughty',
    ShortDescription: 'sweetjhbhjb',
    Description: 'hvjhvdchjd',
  },
  {
    ThumbnailImagePath: 'http://i3.ytimg.com/vi/01cc5or1728/maxresdefault.jpg',
    YoutubeUrl: 'XS9kp88zC1U',
    Title: 'nlknlkcnvlkcn',
    ShortDescription: 'sweetjhbhjb',
    Description: 'hvjhvdchjd',
  },
  {
    ThumbnailImagePath: '',
    YoutubeUrl: 'fWYM2k9Iscg',
    Title: "nilaa's blog",
    ShortDescription: 'sweetjhbhjb',
    Description: 'hvjhvdchjd',
  },
  {
    ThumbnailImagePath: '',
    YoutubeUrl: 'nQHjjmIVjTU',
    Title: "nilaa's blog",
    ShortDescription: 'sweetjhbhjb',
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
        Title: 'naugthy',
        ShortDescription: 'sweetjhbhjb',
        Description: 'hvjhvdchjd',
      },
    };
  }

  _onPressExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState((prevState) => ({expand: !prevState.expand}));
  };

  _onPressVideo = (item) => {
    this.setState({VideoDetails: item});
  };

  _renderVideos = ({item}) => {
    const VideoDetails = this.props.navigation.getParam('VideoDetails');
    const {ThumbnailImagePath, Title, ShortDescription, YoutubeUrl} = item;
    return VideoDetails.YoutubeUrl == item.YoutubeUrl ? null : (
      <VideoPlayList
        onPress={() => this._onPressVideo(item)}
        thumbnailImage={ThumbnailImagePath}
        title={Title}
        shortDescription={ShortDescription}
      />
    );
  };

  render() {
    // const VideoDetails = this.props.navigation.getParam('VideoDetails');
    const {
      YoutubeUrl,
      Title,
      ShortDescription,
      Description,
    } = this.state.VideoDetails;
    const {expand} = this.state;
    const {videos} = this.props.VideosState;
    return (
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
            <Icon
              type="MaterialIcons"
              name={expand ? 'expand-more' : 'expand-less'}
              size={24}
            />
          </TouchableOpacity>
        </View>
        <View padd>
          <FlatList
            extraData={VideoDetails}
            showsVerticalScrollIndicator={false}
            data={videos}
            renderItem={this._renderVideos}
            keyExtractor={(item) => item.Id.toString()}
          />
        </View>
      </View>
    );
  }
}

export default VideoPlayerScreen;
