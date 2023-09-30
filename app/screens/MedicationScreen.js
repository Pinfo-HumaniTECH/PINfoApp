import React from 'react';
import { SearchBar } from 'react-native-elements';
import { StyleSheet, View, Text, SafeAreaView, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import styles from './Styles.js'
// import {Card, Button , Title ,Paragraph } from 'react-native-paper';



class MedicationScreen extends React.Component {
    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({search});
    };
    render() {
        const {search} = this.state;

        return (
            <SafeAreaView style = {styles.screenTitle}>
                <View style={{
                    justifyContent: 'center',            
                }}>
                    <Text style={{marginTop: '15px', textAlign: 'center', color: 'white', fontSize: '35px'}}> Medication </Text>
                </View>

            </SafeAreaView>
        );
    }
}


export default MedicationScreen;