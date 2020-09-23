import React from 'react';
import {BlogScreenCard} from '../components/ui/Card';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import Header from '../components/ui/Header';
const BlogScreen = () => {
  let BlogDetails = [
    {
      heading: 'Choose the right soil for Crops in South Nepal',
      date: 'Posted on Jan 10',
      description:
        'saaaaaaaaaaaaaaa dsfdsferfe knfklsnefklwen jhnolkjweqhklrjweqhkler hbjbsjbvsr oocoiecoi onondondosinf onokndofnd',
    },
    {
      heading: 'Choose the right soil for Crops in South Nepal',
      date: 'Posted on Jan 10',
      description:
        'saaaaaaaaaaaaaaa dsfdsferfe knfklsnefklwen jhnolkjweqhklrjweqhkler hbjbsjbvsr oocoiecoi onondondosinf onokndofnd',
    },
    {
      heading: 'Choose the right soil for Crops in South Nepal',
      date: 'Posted on Jan 10',
      description:
        'saaaaaaaaaaaaaaa dsfdsferfe knfklsnefklwen jhnolkjweqhklrjweqhkler hbjbsjbvsr oocoiecoi onondondosinf onokndofnd',
    },
    {
      heading: 'Choose the right soil for Crops in South Nepal',
      date: 'Posted on Jan 10',
      description:
        'saaaaaaaaaaaaaaa dsfdsferfe knfklsnefklwen jhnolkjweqhklrjweqhkler hbjbsjbvsr oocoiecoi onondondosinf onokndofnd',
    },
    {
      heading: 'Choose the right soil for Crops in South Nepal',
      date: 'Posted on Jan 10',
      description:
        'saaaaaaaaaaaaaaa dsfdsferfe knfklsnefklwen jhnolkjweqhklrjweqhkler hbjbsjbvsr oocoiecoi onondondosinf onokndofnd',
    },
    {
      heading: 'Choose the right soil for Crops in South Nepal',
      date: 'Posted on Jan 10',
      description:
        'saaaaaaaaaaaaaaa dsfdsferfe knfklsnefklwen jhnolkjweqhklrjweqhkler hbjbsjbvsr oocoiecoi onondondosinf onokndofnd',
    },
    {
      heading: 'Choose the right soil for Crops in South Nepal',
      date: 'Posted on Jan 10',
      description:
        'saaaaaaaaaaaaaaa dsfdsferfe knfklsnefklwen jhnolkjweqhklrjweqhkler hbjbsjbvsr oocoiecoi onondondosinf onokndofnd',
    },
    {
      heading: 'Choose the right soil for Crops in South Nepal',
      date: 'Posted on Jan 10',
      description:
        'saaaaaaaaaaaaaaa dsfdsferfe knfklsnefklwen jhnolkjweqhklrjweqhkler hbjbsjbvsr oocoiecoi onondondosinf onokndofnd',
    },
    {
      heading: 'Choose the right soil for Crops in South Nepal',
      date: 'Posted on Jan 10',
      description:
        'saaaaaaaaaaaaaaa dsfdsferfe knfklsnefklwen jhnolkjweqhklrjweqhkler hbjbsjbvsr oocoiecoi onondondosinf onokndofnd',
    },
    {
      heading: 'Choose the right soil for Crops in South Nepal',
      date: 'Posted on Jan 10',
      description:
        'saaaaaaaaaaaaaaa dsfdsferfe knfklsnefklwen jhnolkjweqhklrjweqhkler hbjbsjbvsr oocoiecoi onondondosinf onokndofnd',
    },
    {
      heading: 'Choose the right soil for Crops in South Nepal',
      date: 'Posted on Jan 10',
      description:
        'saaaaaaaaaaaaaaa dsfdsferfe knfklsnefklwen jhnolkjweqhklrjweqhkler hbjbsjbvsr oocoiecoi onondondosinf onokndofnd',
    },
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Header title="Blog" />
        <View style={{padding: 15}}>
          {/* <ScrollView style={{marginHorizontal: 20}}> */}
          {BlogDetails.map((item, index) => {
            return <BlogScreenCard blogdetail={item} key={index} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BlogScreen;
