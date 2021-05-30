import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import db from '../config';

import AttendanceScreen from '../screens/AttendanceScreen'

var attendanceRef, attendance;    
var a1,
  a2,
  a3,         
  a4,
  a5;

          
export default class Total extends React.Component {
       
  getAttendance = () => {
    attendanceRef = db.ref('/'); 
    attendanceRef.on('value', (data) => {
      attendance = data.val();
    
    a1 = attendance.tyler;
    a2 = attendance.john;
    a3 = attendance.emily;
    a4 = attendance.mary;
    a5 = attendance.kevin;

    });
  };
   
  render() {
    return (
      <View style={{ marginTop: 25, marginLeft: 30 }}>
        {this.getAttendance()}
  <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Tyler: {a1}</Text>
  <Text style={{ fontWeight: 'bold', fontSize: 30 }}>John : {a2}</Text>
  <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Emily: {a3}</Text>
  <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Mary: {a4}</Text>
  <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Kevin: {a5}</Text>
      </View>
    );
  }
}
