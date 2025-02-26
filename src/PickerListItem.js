import React from 'react';
import {View, Text} from 'react-native';

export default function PickerListItem({
  label,
  label1,
  style,
  itemColor,
  allItemsColor,
  fontSize,
  fontFamily = 'Arial',
}) {
  return (
    <View style={[style, {flexDirection:'row', justifyContent:'space-around'}]}>
      <Text
        style={{
          fontSize: fontSize,
          color: itemColor ? itemColor : allItemsColor,
          fontFamily: fontFamily,
          textAlign:'center',
          flex:0.5
        }}>
        {label}
      </Text>
      <Text
        style={{
          fontSize: fontSize,
          color: itemColor ? itemColor : allItemsColor,
          fontFamily: fontFamily,
          textAlign:'center', 
          flex:0.5
        }}>
        {label1}
      </Text>
    </View>
  );
}
