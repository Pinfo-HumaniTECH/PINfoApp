import React from 'react';
import { SearchBar } from 'react-native-elements';
import { StyleSheet, View, Text, Image, SafeAreaView, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import styles from './Styles.js'
// import {Card, Button , Title ,Paragraph } from 'react-native-paper';
import { Card } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';


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
                    justifyContent: 'center'
                }}>
                    <Text style={{marginTop: '15px', textAlign: 'center', color: 'white', fontSize: '35px'}}> Medication </Text>
                </View>
                <View style={styles.card}>       
                <Card>
                <Image style={{height: '50px', width: '50px', position: 'relative', left: '45%'}}source={require('./pillIcon.png')} />
          <Card.Title>Medicine Name</Card.Title>
          <Card.Divider />
          <Text>Medicine Information</Text>
        </Card>
        </View>
            </SafeAreaView>
        );
    }
}


export default MedicationScreen;