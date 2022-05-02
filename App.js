// Unit01
import * as React from 'react'
import { Text,View } from 'react-native'

export default function App(){
  return(
    <view style={{flex:1,paddingTop:100,textAlign:'center'}}>
      <Text>My First App</Text>
    </view>
  );
}

/* import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <WebView 
      style={styles.container}
      source={{ uri: 'https://jsdb-4dcdc.firebaseapp.com/0314CRUD9x.html' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
 */


/*import React from 'react';
import { View } from 'react-native';

//5.4
const WHLayout = () => {
  return (
    <View>
      <View style={{
        width: 30, height: 30, backgroundColor: 'lightyellow'
      }} />
      <View style={{
        width: 60, height: 60, backgroundColor: 'yellow'
      }} />
      <View style={{
        width: 90, height: 90, backgroundColor: 'greenyellow'
      }} />
    </View>
  );
};
export default WHLayout;
*/
/* 5.3
const AboutStyles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.myGreen}>綠油油</Text>
      <Text style={styles.myOrange}>黃橙橙</Text>
      <Text style={[styles.myOrange, styles.myGreen]}>黃橙橙, 綠油油</Text> 
    </View>
  );
};
// 後方優先 

const styles = StyleSheet.create({
container: {
  marginTop: 50,
},
myOrange: {
  color: 'orange',
  fontWeight: 'bold',
  fontSize: 24,
},
myGreen: {
  color: 'green',
},
});

export default AboutStyles;

*/

/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>哈囉，大家早安</Text>
      <StatusBar style="auto" />
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
});*/
