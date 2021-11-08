import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button, TouchableHighlight, TouchableOpacity} from 'react-native';
import styles from './Styles.js'

//import {render} from "react-dom";
import Icon from 'react-native-vector-icons/FontAwesome5'
//import { faHome } from "@fortawesome/free-solid-svg-icons";
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
function ProfileScreen() {
    return (
        //bg styling
        <SafeAreaView style={styles.container}>

            {/* Header bar */}
            <View style={styles.header}>
                <Text style={styles.headerText}>John Doe</Text>
            </View>

            {/* Book an appointment */}
            <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity = { .5 }
            >
                <Text style={styles.whiteText25}>Book an appointment</Text>
            </TouchableOpacity>
            <Text style={styles.purpleText16}>Last Appointment: September 5, 2021</Text>

            {/* Current Medications */}
        </SafeAreaView>
    );
}

export default ProfileScreen;
const COLORS = {
    purple: '#4E30ED',
  };
const containerStyle = { backgroundColor: "orange"};   
