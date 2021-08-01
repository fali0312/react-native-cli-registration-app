import React, {useState, useContext,Component} from "react";
import {Text, StyleSheet, View, TextInput,
    TouchableHighlight,KeyboardAvoidingView,
    ScrollView, AsyncStorage} from 'react-native';
import RegistrationForm from './RegistrationForm';

export default class RegistrationList extends React.Component {

    constructor(){
        super();
        this.state ={
            identitynum: '',
            identitytype: '',
            name: '',
            age: '',
            dob: '',
            marriage: ''
        }

        AsyncStorage.getItem ('name',(error,result)=> {
            if (result) {
                this.setState({
                    name: result
                })
            }
        })
        AsyncStorage.getItem ('identitynumber',(error,result)=> {
            if (result){
                this.setState({
                    identitynumber: result
                })
            }
        })
        AsyncStorage.getItem ('identitytype',(error,result)=> {
            if (result){
                this.setState({
                    identitytype: result
                })
            }
        })
        AsyncStorage.getItem ('age',(error,result)=> {
            if (result){
                this.setState({
                    age: result
                })
            }
        })
        AsyncStorage.getItem ('dob',(error,result)=> {
            if (result){
                this.setState({
                    dob: result
                })
            }
        })
        AsyncStorage.getItem ('marriage',(error,result)=> {
            if (result){
                this.setState({
                    marriage: result
                })
            }
        })
    }
    
    render(){

    return (
     <View>
        <Text style={styles.title}>Registration List</Text>
        <Text style={styles.subtitle}>Identity Number: {this.state.identitynumber}</Text>
        <Text style={styles.subtitle}>Identity Type: {this.state.identitytype}</Text>
        <Text style={styles.subtitle}>Name: {this.state.name}</Text>
        <Text style={styles.subtitle}>Age: {this.state.age}</Text>
        <Text style={styles.subtitle}>Date of Birth: {this.state.dob}</Text>
        <Text style={styles.subtitle}>Marriage: {this.state.marriage}</Text>
    </View>
    )
};


};

const styles = StyleSheet.create ({
title: {
    textAlign: 'left',
    marginVertical:15,
    marginTop: 20,
    left:40,
    fontSize: 30,
    color: 'black'
},
subtitle: {
    marginVertical: 5,
    marginHorizontal: 40,
    fontSize: 15,
    fontStyle: "normal",
    color: 'black',
    }
});
