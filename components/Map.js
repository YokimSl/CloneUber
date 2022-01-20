import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps';
import { useSelector } from 'react-redux';
import tw from 'twrnc';
import { selectOrigin } from '../slices/navSlice';


const Map = () => {
    const origin = useSelector(selectOrigin);
    return (
        <MapView
        style={tw`flex-1`}
        mapType='mutedStandard'
      initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
    );
};

export default Map

const styles = StyleSheet.create({})
