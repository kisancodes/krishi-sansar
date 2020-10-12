import React from 'react';
import {BlogScreenCard} from '../components/ui/Card';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import Header from '../components/ui/Header';
import {TouchableOpacity} from 'react-native-gesture-handler';
const BlogScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Header title="Blog" />
        <View style={{padding: 5}}>
          <TouchableOpacity onPress={() => navigation.navigate('blogcontent')}>
            <BlogScreenCard
              Heading="Choose the right soil for Crops in South Nepal"
              date="posted on Jan 10"
              description="According to the Nepal Telecommunication Authority, there are more than 38.3 million mobile phone users in Nepal. "
            />
          </TouchableOpacity>
        </View>
        <View style={{padding: 5}}>
          <TouchableOpacity onPress={() => navigation.navigate('blogcontent')}>
            <BlogScreenCard
              Heading="Choose the right soil for Crops in South Nepal"
              date="posted on Jan 10"
              description="According to the Nepal Telecommunication Authority, there are more than 38.3 million mobile phone users in Nepal. "
            />
          </TouchableOpacity>
        </View>
        <View style={{padding: 5}}>
          <TouchableOpacity onPress={() => navigation.navigate('blogcontent')}>
            <BlogScreenCard
              Heading="Choose the right soil for Crops in South Nepal"
              date="posted on Jan 10"
              description="According to the Nepal Telecommunication Authority, there are more than 38.3 million mobile phone users in Nepal. "
            />
          </TouchableOpacity>
        </View>
        <View style={{padding: 5}}>
          <TouchableOpacity onPress={() => navigation.navigate('blogcontent')}>
            <BlogScreenCard
              Heading="Choose the right soil for Crops in South Nepal"
              date="posted on Jan 10"
              description="According to the Nepal Telecommunication Authority, there are more than 38.3 million mobile phone users in Nepal. "
            />
          </TouchableOpacity>
        </View>
        <View style={{padding: 5}}>
          <TouchableOpacity onPress={() => navigation.navigate('blogcontent')}>
            <BlogScreenCard
              Heading="Choose the right soil for Crops in South Nepal"
              date="posted on Jan 10"
              description="According to the Nepal Telecommunication Authority, there are more than 38.3 million mobile phone users in Nepal. "
            />
          </TouchableOpacity>
        </View>
        <View style={{padding: 5}}>
          <TouchableOpacity onPress={() => navigation.navigate('blogcontent')}>
            <BlogScreenCard
              Heading="Choose the right soil for Crops in South Nepal"
              date="posted on Jan 10"
              description="According to the Nepal Telecommunication Authority, there are more than 38.3 million mobile phone users in Nepal. "
            />
          </TouchableOpacity>
        </View>
        <View style={{padding: 5}}>
          <TouchableOpacity onPress={() => navigation.navigate('blogcontent')}>
            <BlogScreenCard
              Heading="Choose the right soil for Crops in South Nepal"
              date="posted on Jan 10"
              description="According to the Nepal Telecommunication Authority, there are more than 38.3 million mobile phone users in Nepal. "
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BlogScreen;
