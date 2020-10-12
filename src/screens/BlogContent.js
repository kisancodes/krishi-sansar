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
          According to the Nepal Telecommunication Authority, there are more
          than 38.3 million mobile phone users in Nepal. The estimated
          population of Nepal is around 30 million.
        </Text>
        <Text>
          The telecommunication regulatory body of Nepal says the number of
          mobile phone users in the country is 34 percent higher than the total
          population of the country. The number is increasing exponentially and
          it is because mobile phones are not only used for communication but
          also for knowledge learning and entertainment.
        </Text>
        <Image source={Blogpic2} />
        <Text>
          The use of the mobile phone in the older generation who are involved
          in farming are also increasing. According to the Ministry of
          Agriculture and Livestock Development, 66 percent of Nepalese people
          rely on agriculture. According to the World Bank, agriculture is the
          main source of food, income, and employment for the majority. It
          provides about 33% of the Gross Domestic Product (GDP).
        </Text>
      </View>
    </View>
  );
};
export default BlogContent;
