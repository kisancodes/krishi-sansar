import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import PersonPhoto from '../../assets/images/passportpoto.png';
const Cards = (props) => {
  return (
    <View
      style={{
        borderColor: '#a9a9a9',
        borderWidth: 1,
        borderStyle: 'solid',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        marginBottom: 15,
      }}>
      <View style={{justifyContent: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <Text>{props.id + 1} .</Text>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: 18,
              lineHeight: 21,
            }}>
            {props.vegetableDetail.vegetable}
          </Text>
        </View>
      </View>
      <View style={{justifyContent: 'center'}}>
        <Text
          style={{
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 18,
            lineHeight: 21,
          }}>
          {props.vegetableDetail.price}
        </Text>
      </View>
    </View>
  );
};
export default Cards;

export const WeatherCards = (props) => {
  return (
    <View
      style={{
        borderColor: '#a9a9a9',
        borderWidth: 1,
        borderStyle: 'solid',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        marginBottom: 15,
      }}>
      <View style={{justifyContent: 'center'}}>
        {/* <View style={{flexDirection: 'row'}}> */}
        {/* <Text>{props.id + 1} .</Text> */}
        <Text
          style={{
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 18,
            lineHeight: 21,
          }}>
          {props.citiesDetail.city}
        </Text>
        {/* </View> */}
      </View>
      <View style={{justifyContent: 'center'}}>
        <Text
          style={{
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 18,
            lineHeight: 21,
          }}>
          {props.citiesDetail.degree}
        </Text>
      </View>
    </View>
  );
};
export const ExpertCard = (props) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        padding: 20,
        // padding: 20,
        // marginBottom: 15,
        // // marginTop: '20%',
        // borderColor: '#a9a9a9',
        // // marginLeft: '10%',
        // // marginRight: '10%',
        // borderWidth: 1,
        // borderStyle: 'solid',
        // shadowColor: '#000',
        // shadowOffset: {
        //   width: 1,
        //   height: 2,
        // },
        // shadowOpacity: 0.2,
        // blurRadius: 1,
        // shadowRadius: 1.41,
        // elevation: 1,
      }}>
      <View
        style={{
          // flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        {/* <View style={{justifyContent: 'space-evenly', flexDirection: 'row'}}> */}
        <View>
          <Image source={PersonPhoto} />
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: 16,
              lineHeight: 21,
            }}>
            {props.exportdetail.name}
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: 16,
              lineHeight: 21,
            }}>
            Dinsct: {props.exportdetail.address}
          </Text>
          <Text
            style={{
              fontfamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: 16,
              lineHeight: 21,
            }}>
            contact: {props.exportdetail.contact}
          </Text>
        </View>
      </View>
    </View>
  );
};

export const BlogCard = (props) => {
  return (
    <View>
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
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard
      </Text>
    </View>
  );
};
export const BlogScreenCard = (props) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        padding: 20,
        // marginBottom: 15,
        // padding: 10,
        // shadowColor: '#000',
        // shadowOffset: {
        //   width: 0,
        //   height: 1,
        // },
        // shadowOpacity: 0,
        // shadowRadius: 2.22,

        // elevation: 3,
      }}>
      <View>
        <Text
          style={{
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',

            fontSize: 16,
            lineHeight: 19,
          }}>
          {props.blogdetail.heading}
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
          {props.blogdetail.date}
        </Text>
        <Text
          style={{
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 16,
            lineHeight: 19,
            // textAlign: 'justify',
          }}>
          {props.blogdetail.description}
        </Text>
      </View>
    </View>
  );
};

//   style={{
//     marginTop: '20%',
//     borderColor: '#a9a9a9',
//     marginLeft: '10%',
//     marginRight: '10%',
//     borderWidth: 1,
//     paddingLeft: '2%',
//     paddingTop: '4%',
//     paddingRight: '2%',
//     borderStyle: 'solid',
//     width: '80%',
//     height: '45%',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 1,
//       height: 2,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,
//     elevation: 2,
//   }}>
//   <View
//     style={{
//       flex: 1,
//       flexDirection: 'column',
//       width: '100%',
//       height: '100%',
//       // marginLeft: '3%',
//     }}>
//     <Text
//       style={{
//         fontFamily: 'Roboto',
//         fontStyle: 'normal',
//         fontWeight: 'bold',
//         fontSize: 16,
//         lineHeight: 19,
//       }}>
//       {props.title}
//     </Text>
//     <Text
//       style={{
//         fontFamily: 'Roboto',
//         fontStyle: 'italic',
//         fontWeight: 'normal',
//         fontSize: 14,
//         lineHeight: 16,
//         color: '#959595',
//       }}>
//       {props.date}
//     </Text>
//     <Text
//       style={{
//         fontFamily: 'Roboto',
//         fontStyle: 'normal',
//         fontWeight: 'normal',
//         fontSize: 16,
//         lineHeight: 19,
//       }}>
//       {props.description}
//     </Text>
//   </View>
// </View>;
