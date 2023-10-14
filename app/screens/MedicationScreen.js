import React from 'react';
import { SearchBar } from 'react-native-elements';
import { StyleSheet, View, Text, Image, SafeAreaView, Modal, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import styles from './Styles.js'
// import {Card, Button , Title ,Paragraph } from 'react-native-paper';
import { Card } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';


class MedicationScreen extends React.Component {
    state = {
        modalVisible: false,
      };

    updateSearch = (search) => {
        this.setState({search});
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
    render() {
        const {search} = this.state;
        const onPress = () => {
            console.log('test');
        };
        
        return (
            <SafeAreaView style = {styles.screenTitle}>
                <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
            <View style={styles.card}>       
                <Card>
                <Image style={{height: '50px', width: '50px', position: 'relative', left: '45%'}}source={require('./pillIcon.png')} />
          <Card.Title>Insert Medicine Name</Card.Title>
          <Card.Divider />
          <Text>Insert Medicine Information</Text>
        </Card>
        </View>
            <TouchableOpacity
                style={styles.SubmitButtonMed}
                activeOpacity = { .5 }
                onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
            >
                <Text style={styles.whiteText25}>Close Medication Screen</Text>
            </TouchableOpacity>
          </Modal>
                <View style={{
                    justifyContent: 'center'
                }}>
                    <Text style={{marginTop: '15px', textAlign: 'center', color: 'white', fontSize: '35px'}}> Medication </Text>
                </View>
                {/* <div style={styles.cardDiv}>
                    <Text> Medication Name </Text>
                    </div> */}
                <View style={styles.card}>       
                <Card>
                <Image style={{height: '50px', width: '50px', position: 'relative', left: '45%'}}source={require('./pillIcon.png')} />
          <Card.Title>Medicine Name</Card.Title>
          <Card.Divider />
          <Text>Medicine Information</Text>
        </Card>
        </View>
        <TouchableOpacity
                style={styles.SubmitButtonMed}
                activeOpacity = { .5 }
                onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
            >
                <Text style={styles.whiteText25}>Add Medication</Text>
            </TouchableOpacity>
            </SafeAreaView>
        );
    }
}


export default MedicationScreen;