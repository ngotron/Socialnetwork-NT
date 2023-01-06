import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const baseBtn = () => {
  return (
    <View>
      <TouchableOpacity {...props} style={[style.baseBtn, props.style]}>
        <Text style={style.title}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default baseBtn

const styles = StyleSheet.create({})