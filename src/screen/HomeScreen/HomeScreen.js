import React from 'react';
import {View,Text} from 'react-native';
import Button from '../../component/Button';
const HomeScreen = () => {
  return (
    <View  style={{flexDirection:'row'}}>
     <Button title="Login" onPross={()=>{}} />
     <Button title="Register" onPross={()=>{}} />
    
    </View>
  );
}

export default HomeScreen;
