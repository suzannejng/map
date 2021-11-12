import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import Directions from './Directions.js';
const d = Dimensions.get('window');

export default function App() {
 return (
   <View style={styles.container}>
     
        <ImageZoom cropWidth={d.width}
                       cropHeight={d.height-100}
                       imageWidth={d.width}
                       imageHeight={d.height-100}
                       maxOverflow={500}>
              <ImageBackground style={styles.image}
                       source={{uri:'https://www.mit.edu/files/images/201807/15656704711_00457bd2c9_b_1.jpg'}}
                       style={{width: d.width, height: d.height-100}}>
                  <Directions/>
              </ImageBackground>
        </ImageZoom>
    </View>
 );
}
 
const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
 image: {
  width:d.width+300,
  height:d.height+100,
  resizeMode: 'cover',
  position:'relative',



 },
});
