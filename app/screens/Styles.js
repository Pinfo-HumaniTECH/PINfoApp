import { StyleSheet } from 'react-native';
import { COLORS } from './Colors.js'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const circleSpacing = 6;

export default StyleSheet.create({
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
    blueText16: {
        fontSize: 16,
        marginBottom: 24,
        textAlign: 'center',
        color: COLORS.blue,
    },
    SubmitButtonStyle: {
        marginTop: 24,
        marginBottom: 4, 
        paddingTop:8,
        paddingBottom:8,
        marginRight: 16,
        marginLeft: 16,
        backgroundColor: COLORS.blue,
        borderRadius:15,
      },
      SubmitButtonMed: {
        width: 200,
        marginTop: 250,
        marginBottom: 4, 
        paddingTop:8,
        paddingBottom:8,
        marginRight: 16,
        marginLeft: 525,
        backgroundColor: COLORS.blue,
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
    roundButton: { 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: COLORS.mediumGray,
    marginLeft: circleSpacing,
    marginRight: circleSpacing,
    },

    calendarNums: {
        textAlign: 'center',
        color: 'white',
        fontSize: RFPercentage(2),
    },
    todayText: { 
        marginTop: 4,
        fontSize: RFPercentage(2.3),
        textAlign: 'center',
        color: COLORS.blue,
    },  
    calendarContainer: {
        flexDirection: "row",
        marginTop: 16,
        marginLeft: circleSpacing,
        marginRight: circleSpacing,
      },
    medCardGreen: {
        marginTop: 16,
        marginBottom: 16, 
        paddingTop: 8,
        paddingBottom: 8,
        marginRight: 40,
        marginLeft: 40,
        backgroundColor: 'white',
        borderRadius:15,
        borderWidth: 5,
        borderColor: COLORS.green,
      },
      medCardShadowGreen: {
        marginTop: -40,
        top: 81,
        marginRight: 40,
        marginLeft: 40,
        backgroundColor: COLORS.green,
        borderRadius: 15,
        borderWidth: 5,
        borderColor: COLORS.green,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.30,
        shadowRadius: 11,
      },
      medCardGray: {
        marginTop: 16,
        marginBottom: 16, 
        paddingTop: 8,
        paddingBottom: 8,
        marginRight: 40,
        marginLeft: 40,
        backgroundColor: 'white',
        borderRadius:15,
        borderWidth: 5,
        borderColor: COLORS.lightGray,
      },
      medCardShadowGray: {
        marginTop: -40,
        top: 81,
        marginRight: 40,
        marginLeft: 40,
        backgroundColor: COLORS.lightGray,
        borderRadius: 15,
        borderWidth: 5,
        borderColor: COLORS.lightGray,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.30,
        shadowRadius: 11,
      },
      medCardContainer: {
        top: -45,
      },
      innerMedContainer: { 
        flexDirection: "row",
      },
      medCardTitle: {
          fontSize: 24,
      },
      medCardIcons: {
          marginRight: 8,
          marginLeft: 8,
      },
      alarmText: {
        marginBottom: -15, 
        textAlign: 'left', 
        marginLeft: 40, 
        fontWeight: 'bold', 
        fontSize: 25,
      },
      checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
      },
      checkbox: {
        alignSelf: 'center',
        width: 50,
        height: 50
      },
      screenTitle: {
        backgroundColor: "#3476EB",
        height: 75
      }, 
      card: {
        height: '100px',
        // marginTop: '25px',
        paddingTop: '20px',
        position: 'relative',
        top: '50px',
        left:'25%',
        width: '50%',
        justifyContent: 'center',
      },
      cardDiv: {
        borderWidth:1,
        overflow: 'hidden',
        shadowRadius: 10,
        shadowOpacity: 1,
        borderRadius:15, 
        padding: 50, 
        width: 500, 
        marginLeft: 300, 
        marginTop: 50
      }
});