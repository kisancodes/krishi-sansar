import React from 'react';
import {BlogScreenCard} from '../components/ui/Card';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import Header from '../components/ui/Header';
import {TouchableOpacity} from 'react-native-gesture-handler';
const BlogScreen = ({navigation}) => {
  // let BlogDetails = [
  //   {
  //     heading: 'Choose the right soil for Crops in South Nepal',
  //     date: 'Posted on Jan 10',
  //     description:
  //       'saaaaaaaaaaaaaaa dsfdsferfe knfklsnefklwen jhnolkjweqhklrjweqhkler hbjbsjbvsr oocoiecoi onondondosinf onokndofnd',
  //   },
  //   {
  //     heading: 'Choose the right soil for Crops in South Nepal',
  //     date: 'Posted on Jan 10',
  //     description:
  //       'saaaaaaaaaaaaaaa dsfdsferfe knfklsnefklwen jhnolkjweqhklrjweqhkler hbjbsjbvsr oocoiecoi onondondosinf onokndofnd',
  //   },
  //   {
  //     heading: 'Choose the right soil for Crops in South Nepal',
  //     date: 'Posted on Jan 10',
  //     description:
  //       'saaaaaaaaaaaaaaa dsfdsferfe knfklsnefklwen jhnolkjweqhklrjweqhkler hbjbsjbvsr oocoiecoi onondondosinf onokndofnd',
  //   },
  //   {
  //     heading: 'Choose the right soil for Crops in South Nepal',
  //     date: 'Posted on Jan 10',
  //     description:
  //       'saaaaaaaaaaaaaaa dsfdsferfe knfklsnefklwen jhnolkjweqhklrjweqhkler hbjbsjbvsr oocoiecoi onondondosinf onokndofnd',
  //   },
  //   {
  //     heading: 'Choose the right soil for Crops in South Nepal',
  //     date: 'Posted on Jan 10',
  //     description:
  //       'saaaaaaaaaaaaaaa dsfdsferfe knfklsnefklwen jhnolkjweqhklrjweqhkler hbjbsjbvsr oocoiecoi onondondosinf onokndofnd',
  //   },
  //   {
  //     heading: 'Choose the right soil for Crops in South Nepal',
  //     date: 'Posted on Jan 10',
  //     description:
  //       'saaaaaaaaaaaaaaa dsfdsferfe knfklsnefklwen jhnolkjweqhklrjweqhkler hbjbsjbvsr oocoiecoi onondondosinf onokndofnd',
  //   },
  //   {
  //     heading: 'Choose the right soil for Crops in South Nepal',
  //     date: 'Posted on Jan 10',
  //     description:
  //       'saaaaaaaaaaaaaaa dsfdsferfe knfklsnefklwen jhnolkjweqhklrjweqhkler hbjbsjbvsr oocoiecoi onondondosinf onokndofnd',
  //   },
  //   {
  //     heading: 'Choose the right soil for Crops in South Nepal',
  //     date: 'Posted on Jan 10',
  //     description:
  //       'saaaaaaaaaaaaaaa dsfdsferfe knfklsnefklwen jhnolkjweqhklrjweqhkler hbjbsjbvsr oocoiecoi onondondosinf onokndofnd',
  //   },
  //   {
  //     heading: 'Choose the right soil for Crops in South Nepal',
  //     date: 'Posted on Jan 10',
  //     description:
  //       'saaaaaaaaaaaaaaa dsfdsferfe knfklsnefklwen jhnolkjweqhklrjweqhkler hbjbsjbvsr oocoiecoi onondondosinf onokndofnd',
  //   },
  //   {
  //     heading: 'Choose the right soil for Crops in South Nepal',
  //     date: 'Posted on Jan 10',
  //     description:
  //       'saaaaaaaaaaaaaaa dsfdsferfe knfklsnefklwen jhnolkjweqhklrjweqhkler hbjbsjbvsr oocoiecoi onondondosinf onokndofnd',
  //   },
  //   {
  //     heading: 'Choose the right soil for Crops in South Nepal',
  //     date: 'Posted on Jan 10',
  //     description:
  //       'saaaaaaaaaaaaaaa dsfdsferfe knfklsnefklwen jhnolkjweqhklrjweqhkler hbjbsjbvsr oocoiecoi onondondosinf onokndofnd',
  //   },
  // ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Header title="Blog" />
        <View style={{padding: 15}}>
          <TouchableOpacity onPress={() => navigation.navigate('blogcontent')}>
            <BlogScreenCard
              Heading="Choose the right soil for Crops in South Nepal"
              date="posted on Jan 10"
              description="saaaaaaaaaaaaaaa dsfdsferfe knfklsnefklwen jhnolkjweqhklrjweqhkler hbjbsjbvsr oocoiecoi onondondosinf onokndofnd"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BlogScreen;
