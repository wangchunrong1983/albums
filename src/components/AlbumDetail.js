import React from 'react';
import {Text,View,Image,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) => {
  const {title, artist, thumbnail_image, image, url} = album;

  return (
    <Card>

      <CardSection>
        <View style={styles.imageContainerStyle}>
          <Image source={{uri: thumbnail_image}} style={styles.thumbnailStyle} />
        </View>
        <View style={styles.headerContentStyle}>
      <Text style={styles.headerTextStyle}>{title}</Text>
      <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
          <Image source={{uri: image}} style={styles.albumCoverStyle} />
      </CardSection>

      <CardSection>
          <Button onPress={()=> Linking.openURL(url)}>Buy Now</Button>
      </CardSection>
    </Card>
 );
};

const styles = {
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
},
    headerTextStyle: {
        fontSize: 18
},
    thumbnailStyle: {
        height: 50,
        width: 50
},
    imageContainerStyle: {
        justifyContent: 'center',
        alignItems:'center',
        marginLeft: 10,
        marginRight: 10
    },
    albumCoverStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;