import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button, TouchableHighlight, TouchableOpacity} from 'react-native';
import styles from './Styles.js'

function ProfileScreen() {
    return (
        //bg styling
        <SafeAreaView style={styles.container}>

            {/* Header bar */}
            <View style={styles.header}>
                <Text style={styles.headerText}>John Doe</Text>
                <Text style={styles.headerText}>Allergies: None</Text>
            </View>

            {/* Book an appointment */}
            <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity = { .5 }
            >
                <Text style={styles.whiteText25}>Book an appointment</Text>
            </TouchableOpacity>
            <Text style={styles.blueText16}>Last Appointment: September 5, 2021</Text>

            {/* Current Medications */}
        </SafeAreaView>
    );
}

export default ProfileScreen;   

