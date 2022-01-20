import React from 'react'
import { StyleSheet, View } from 'react-native'
import tw from 'twrnc';
import Map from '../components/Map';
import MapView from 'react-native-maps';

const MapScreen = () => {
    return (
        <View>
            <View style={tw`h-1/2`}>
                <Map />
            </View>

         
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
