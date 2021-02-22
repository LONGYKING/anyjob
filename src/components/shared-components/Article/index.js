import React, { Component } from 'react';
import { ListItem, Left, Right, Thumbnail, Body, View, Text, Button } from 'native-base';
import moment from 'moment';
import Icon from "react-native-vector-icons/Ionicons";
import {StyleSheet} from 'react-native';

const ArticleCard = ({article, navigation}) => {
    const {
        author,
        title,
        description,
        urlToImage,
        publishedAt,
        content,
        source: {
            name,
            url,
        }
    } = article;

    const { noteStyle, featuredTitleStyle } = styles;
    const time = moment(publishedAt || moment.now()).fromNow();
    const defaultImg = 'https://www.swiftlynxtechnologies.com/public/authed_assets/images/profile_picture/avatar.png';

    return (
        <ListItem thumbnail>
            <Left>
                <Thumbnail circle source={{ uri: urlToImage || defaultImg }} />
            </Left>
            <Body>
                <Text numberOfLines={2}>{title}{JSON.stringify(article.title)}</Text>
                <Text note numberOfLines={2}>{description}</Text>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>{author}</Text>
                    <Text note style={{marginHorizontal:10}}>{time}</Text>
                </View>
            </Body>
            <Right>
                <Button transparent onPress={() => alert(content)}>
                  <Text>Read</Text>
                </Button>
            </Right>
        </ListItem>
    );
}

var styles = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft: 5,
      marginRight: 5,
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'white',
  
    },
  
    textView: {
      flex: 1,
      paddingTop: 5,
      paddingLeft: 5,
      paddingRight: 5,
      marginLeft: 5,
      marginRight: 5,
      backgroundColor: 'white',
      marginBottom: 5,
    },
  
    details: {
      flex:1,
      justifyContent: 'flex-start',
      flexDirection: 'row',
    },
  
    headline: {
      flex: 0,
      fontWeight: 'bold',
      fontSize: 20,
      margin: 3,
  
    },
  
    timeStamp: {
      flex: 0,
      margin: 3,
    },
  
    collection: {
      flex: 0,
      color: '#9d0a0e',
      margin: 3,
    },
  
    border: {
      padding: 3,
      borderLeftWidth: 1,
      borderLeftColor: 'black',
      borderStyle: 'solid'
    },
  
    imageContainer: {
      flex:1,
      height: 200,
      alignItems: 'stretch'
    },
  
    thumbnail: {
      flex:1
    }
  
  });

export default ArticleCard;
