import React from 'react';

import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Header from '../components/ui/Header';
import {ExpertCard} from '../components/ui/Card';
import PersonPhoto from '../assets/images/passportpoto.png';
const ContactExpert = () => {
  let ExpertDetails = [
    {
      name: 'Dr Hari Ram',
      address: 'sindhupalchowk,chautara',
      contact: 9843634142,
    },
    {
      name: 'Dr Hari Ram',
      address: 'sindhupalchowk,chautara',
      contact: 9843634142,
    },
    {
      name: 'Dr Hari Ram',
      address: 'sindhupalchowk,chautara',
      contact: 9843634142,
    },
    {
      name: 'Dr Hari Ram',
      address: 'sindhupalchowk,chautara',
      contact: 9843634142,
    },
    {
      name: 'Dr Hari Ram',
      address: 'sindhupalchowk,chautara',
      contact: 9843634142,
    },
    {
      name: 'Dr Hari Ram',
      address: 'sindhupalchowk,chautara',
      contact: 9843634142,
    },
    {
      name: 'Dr Hari Ram',
      address: 'sindhupalchowk,chautara',
      contact: 9843634142,
    },
  ];
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Header title="ContactExpert" />
        <View style={{padding: 15}}>
          {ExpertDetails.map((item, index) => {
            return <ExpertCard exportdetail={item} key={index} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default ContactExpert;
