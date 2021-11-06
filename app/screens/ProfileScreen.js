import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button, TouchableHighlight, TouchableOpacity} from 'react-native';

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
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAFAFA",
        fontFamily: "Arial",
    },
    header: {
        justifyContent: 'center',     
    },
    headerText: {
        marginTop: 16,
        fontSize: 25,
        textAlign: 'center',
        fontWeight: "bold", 
        color: "black",    
    },
    whiteText25: {
        fontSize: 25,
        textAlign: 'center',
        color: "white",
    },
    purpleText16: {
        fontSize: 16,
        marginBottom: 24,
        textAlign: 'center',
        color: COLORS.purple,
    },
    SubmitButtonStyle: {
        marginTop: 24,
        marginBottom: 4, 
        paddingTop:8,
        paddingBottom:8,
        marginRight: 16,
        marginLeft: 16,
        backgroundColor: COLORS.purple,
        borderRadius:15,
      },
    
    roundedRectangle: {
        backgroundColor: "#F1F9FF",
        flex: 1,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40, 
        borderRadius: 25,
        alignItems: 'center',
    },
    titleText: {
        color: "#3476EB", 
        fontWeight: "bold", 
        textAlign: "center", 
        paddingTop: 10, 
        fontSize: 18,
    },
  });