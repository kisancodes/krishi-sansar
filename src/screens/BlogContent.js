import React from 'react';
import {View, Text, Image} from 'react-native';
import {BlogHeader} from '../components/ui/Header';
import Blogpic1 from '../assets/images/blogpic1.png';
import Blogpic2 from '../assets/images/blogpic2.png';

const BlogContent = () => {
  return (
    <View>
      <BlogHeader title="Blogs" />
      <View style={{padding: 15}}>
        <Text
          style={{
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 16,
            lineHeight: 19,
          }}>
          Expert suggestions for farmers from Northern Nepal
        </Text>
        <Text
          style={{
            fontFamily: 'Roboto',
            fontStyle: 'italic',
            fontWeight: 'normal',
            fontSize: 14,
            lineHeight: 16,
            color: '#959595',
          }}>
          Posted on Jan 10
        </Text>
        <Image source={Blogpic1} />
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </Text>
        <Image source={Blogpic2} />
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard{' '}
        </Text>
      </View>
    </View>
  );
};
export default BlogContent;
