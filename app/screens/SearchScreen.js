import React from 'react';
import { SearchBar } from 'react-native-elements';
import { StyleSheet, View, Text, SafeAreaView, Button, TouchableHighlight } from 'react-native';



class SearchScreen extends React.Component {
    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({search});
    };
    render() {
        const {search} = this.state;

        return (
            <SafeAreaView style = {{backgroundColor: "#3476EB"}}>
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
            </SafeAreaView>
        );
    }
}


export default SearchScreen;