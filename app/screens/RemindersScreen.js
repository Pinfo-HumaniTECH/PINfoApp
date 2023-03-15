import React, {useState} from 'react';
import { CheckBox, StyleSheet, View, Text, SafeAreaView, ScrollView, Button, TouchableHighlight, TouchableOpacity, useWindowDimensions} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from './Colors.js'
import styles from './Styles.js'
import Feather from 'react-native-vector-icons/Feather'

function RemindersScreen() {
    
    const window = useWindowDimensions();
    const spacing = 6;
    const circleWidth = Math.round((window.width - (spacing * 16)) / 7);
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
    "October", "November", "December"]
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    const daysOfWeek = [date-3, date-2, date-1, date, date+1, date+2, date+3];
    const dayButtons = [];
    const currentDate = date
    const [isSelected, setSelection] = useState(false);
    const [isSelected2, setSelection2] = useState(false);

    //for each day of week, populate circles
    daysOfWeek.forEach((day) => {

        //make the background color purple if its the current day and add today text
        if (currentDate == day) {
            dayButtons.push(
                <View>
                    <TouchableOpacity
                        style={[styles.roundButton, {height: circleWidth, width: circleWidth, backgroundColor: COLORS.purple}]}
                        activeOpacity = {.5}
                    >
                        <Text style={styles.calendarNums}>{day}</Text>
                    </TouchableOpacity>
                    <Text style={styles.todayText}>Today</Text>
                </View>
            )

        } else {
            dayButtons.push(
                <TouchableOpacity
                    style={[styles.roundButton, {height: circleWidth, width: circleWidth}]}
                    activeOpacity = { .5 }
                >
                    <Text style={styles.calendarNums}>{day}</Text>
                </TouchableOpacity>
            )
        }
       
    })        

    return (
        
        //bg styling
        <ScrollView style={styles.container}>

            {/* Header bar */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Reminders</Text>
            </View>

            <View style={styles.header}>
                <Text style={styles.headerText}>{months[month-1]}</Text>
            </View> 

            {/* Container for days of week */}
            <View style={styles.calendarContainer} >
                {dayButtons}
            </View>

            {/* Medication cards */}

            {/* ADVIL TAKEN */}
             {/* bottom tab */}
             <Text style={[styles.alarmText, {marginTop: 20}]}>8:00 AM</Text>
             <View style={{marginTop: 30}}>
                <TouchableOpacity
                    style={isSelected ? styles.medCardShadowGreen : styles.medCardShadowGray}
                    activeOpacity = { .5 }>
                    <Text style={{color: 'white', textAlign: 'center', marginTop: 30}}>
                    {isSelected ? 'Taken!' : 'Not Taken!'}
                    </Text>
                  
                </TouchableOpacity>
            </View>
            {/* content */}
            <View style={styles.medCardContainer}>
                <TouchableOpacity
                    style={isSelected ? styles.medCardGreen : styles.medCardGray}
                    activeOpacity = { .5 }
                >
                    <View style={styles.innerMedContainer}>  
                        {/* left side */}
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <View style={{marginLeft: 24}}>
                                <Text style={{fontSize: 30}}>Advil</Text>
                                <Text style={{fontSize: 16}}>With food</Text>
                            </View>
                        </View>
                        {/* right side */}
                        <View style={{flex: 1.5, flexDirection: 'row', marginRight: 16, alignContent: 'center', justifyContent: 'center'}}>                                                      
                            <Text style={{fontSize: 20, margin: 'auto'}}>PILL ICON</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 35, marginTop: 4, marginRight: 20}}>x 2</Text>
                            <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox}/>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            {/* ADVIL NOT TAKEN */}
            {/* bottom tab */}
            
            <Text style={{marginBottom: 15, textAlign: 'left', marginLeft: 40, fontWeight: 'bold', fontSize: 25,}}>10:30 AM</Text>
            <View>
                <TouchableOpacity
                    style={isSelected2 ? styles.medCardShadowGreen : styles.medCardShadowGray}
                    activeOpacity = { .5 }>
                    <Text style={{color: 'white', textAlign: 'center', marginTop: 30}}>
                    {isSelected2 ? 'Taken!' : 'Not Taken!'}
                    </Text>
                </TouchableOpacity>
            </View>
            {/* content */}
            <View style={styles.medCardContainer}>
                <TouchableOpacity
                    style={isSelected2 ? styles.medCardGreen : styles.medCardGray}
                    activeOpacity = { .5 }
                >
                    <View style={styles.innerMedContainer}>  
                        {/* left side */}
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <View style={{marginLeft: 24}}>
                                <Text style={{fontSize: 30}}>Crestor</Text>
                                <Text style={{fontSize: 16}}>Before food</Text>
                            </View>
                        </View>
                        {/* right side */}
                        <View style={{flex: 1.5, flexDirection: 'row', marginRight: 16, alignContent: 'center', justifyContent: 'center'}}>                                                      
                            <Text style={{fontSize: 20, margin: 'auto'}}>PILL ICON</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 35, marginTop: 4, marginRight: 20}}>x 2</Text>
                            <CheckBox value={isSelected2} onValueChange={setSelection2} style={styles.checkbox}/>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            

        </ScrollView>
    );
}

export default RemindersScreen; 
  