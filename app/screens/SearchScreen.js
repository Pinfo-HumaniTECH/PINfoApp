import React from 'react';
import { SearchBar } from 'react-native-elements';
import { StyleSheet, View, Image, Text, SafeAreaView, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import styles from './Styles.js'
import MedicationScreen from './MedicationScreen';



class SearchScreen extends React.Component {
    state = {
        search: '',
        imageLoad: false
    };

    updateSearch = (search) => {
        this.setState({search});
        if (search === 'Bisacodyl' || search === 'bisacodyl' ) {
            this.setState({imageLoad: true})
        } else {
            this.setState({imageLoad: false})
        }
    };
    render() {
        const {search} = this.state;
        const medication = new MedicationScreen();
        return (
            <SafeAreaView>
                <View style={{
                    justifyContent: 'center',            
                }}>
                    <Text style={{textAlign: 'center'}}> Search </Text>
                </View>
                <SearchBar
                    placeholder = "Type Here"
                    onChangeText = {this.updateSearch}
                    value = {search}
                />
            {this.state.imageLoad && <Image style={{height: '275px', width: '200px', position: 'center', left: '40%'}}source={require('./Bisacodyl.png')} />}
            {this.state.imageLoad && 
       <TouchableOpacity
       style={styles.SubmitButtonCenter}
       activeOpacity = { .5 }
       onPress={() => {
           medication.save(this.state.search, '')
         }}
   >
       <Text>Add Medication</Text>
   </TouchableOpacity>
            
            }

            </SafeAreaView>
        );
    }
}


export default SearchScreen;