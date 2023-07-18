import React,{useCallback,useEffect,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';


import ImageViewer from './Components/ImageViewer';
import Button from './Components/Button';

const PlaceholderImage = require('./Assets/Image.png');

export default function App() {

  SplashScreen.preventAutoHideAsync();
  const [appIsReady,setAppIsReady] = useState(false);
  

  useEffect( () => {
    async function show_splash_screen(){
    try{
       
        new Promise(resolve => setTimeout(resolve,5000)); 
    }catch(e){
        console.warn(e);
    }finally{
        setAppIsReady(true); 
    }
    }
    show_splash_screen();
});


const onLayoutRootView = useCallback(async () => {
  if(appIsReady){
  // hide the splash screen.
  await SplashScreen.hideAsync();
  }
},[appIsReady]);

if(!appIsReady){
  return null;
}

return (
 
  <View style={styles.container} onLayout={onLayoutRootView}>
    <View style={styles.imageContainer}>
      <ImageViewer placeholderImageSource = {PlaceholderImage}/>
    </View>


    <View style={styles.footerContainer}>
        <Button label= "Sign up"/>
        <Text style={[{padding: 20}]}>Already have an account? Log in instead</Text>
        <Button theme="primary" label="Continue without an account" />
      </View>

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
  imageContainer:{
    flex: 1,
    paddingTop: 68
  },
  footerContainer: {
    flex: 2 / 3,
    alignItems: 'center',
  }
 
});
