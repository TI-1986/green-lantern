import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


import verde  from './assets/pictures/verde.png';
import yellow  from './assets/pictures/amarelo.png';


export default function App() {

  const [isActive, setisActive] =  useState(false)
 function  handleSymbol(){
  setisActive((oldValue:boolean) => {
      return !oldValue
    })
    console.log(isActive)
  }  

  return (
    <View style={isActive ? styles.containerv : styles.containery}>
      <TouchableOpacity onPress={handleSymbol} >
      
        <Image
        source={isActive ? verde : yellow}
        style={styles.image}
        
      />
        </TouchableOpacity>     
    </View>
  );
}

const styles = StyleSheet.create({
  containerv: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',   
  },
  containery: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',   
  },

  image:{
    width: 250,
    height: 250,
  },

   
});
