import React from 'react'
import { View, Text } from "react";
  
export const styles = StyleSheet.create({
    circle: {
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
      backgroundColor: "red",
    },
  });

const Circle = () => {
    return <View style={styles.circle} />;
  };


export default Circle

