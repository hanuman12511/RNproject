import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
export default function Button(props) {
  return (
    <TouchableOpacity onPress={()=>{}}>
        <Text style={{width:'50%',backgroundColor:'green',padding:20}}>{props.title}</Text>
    </TouchableOpacity>
  );
}
