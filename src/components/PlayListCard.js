import React from 'react';
import {
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Dimensions,
  Text,
} from 'react-native';
// import Icon from 'react-native-vector-icons/ion';

const {width} = Dimensions.get('window');

const PlayListCard = (props) => {
  const {thumbnailImage, title, shortDescription, onPress} = props;
  return (
    <View style={{flexDirection: 'row', marginBottom: 10}}>
      <ImageBackground
        source={{uri: thumbnailImage}}
        style={{height: 80, width: width / 2.8}}>
        <TouchableWithoutFeedback onPress={onPress}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
            {/* <Icon
              type=""
              name="md-play-circle"
              style={{fontSize: 50, color: 'red'}}
            /> */}
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>

      <View style={{paddingHorizontal: 10, flex: 1}}>
        <Text>{title}</Text>
        <Text>{shortDescription}</Text>
      </View>
    </View>
  );
};

export default PlayListCard;
