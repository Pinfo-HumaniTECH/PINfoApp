import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button, TouchableHighlight, TouchableOpacity} from 'react-native';
import styles from './Styles.js'

function TodayScreen() {
    return (
        //bg styling
        <SafeAreaView style={styles.container}>

            {/* Header bar */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Today</Text>
            </View>

        </SafeAreaView>
    );
}

export default TodayScreen;   

