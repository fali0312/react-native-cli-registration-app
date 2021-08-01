import React, {useState, useContext,Component} from "react";
import {Text, StyleSheet, View, TextInput,
    TouchableHighlight,KeyboardAvoidingView,
    ScrollView, AsyncStorage,Refresh} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default class RegistrationForm extends React.Component {

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

    render (){

        
        
        return (
            <ScrollView>
        <KeyboardAvoidingView 
        keyboardVerticalOffset = {-500}
        behavior="padding">
    <View styles={styles.container}>
        

        <Text style={styles.title}>Registration Form</Text>

        <Text style= {styles.subtitle}>Identity Number</Text>
        <TextInput 
        autoCapitalize ='none'
        autoCorrect ={false}
        style={styles.input}
        onChangeText={(textNumber) => this.setState ({textNumber})}
        placeholder = "Ex: 231230102312"
        label = "Identity Num"
        />

        <Text style={styles.subtitle}>Identity Type</Text>
        <TextInput 
        autoCapitalize ='none'
        autoCorrect={false}
        style={styles.input}
        onChangeText={(textType) => this.setState ({textType})}
        placeholder = "Ex: KTP/Passport"
        label = "Identity Type"
        />

        <Text style={styles.subtitle}>Name</Text>
        <TextInput 
        autoCapitalize ='none'
        autoCorrect={false}
        style={styles.input}
        onChangeText={(textName) => this.setState ({textName})}
        placeholder = "Ex: John"
        label = "Name"
        />

        <Text style={styles.subtitle}>Age</Text>
        <TextInput 
        autoCapitalize ='none'
        autoCorrect={false}
        style={styles.input}
        onChangeText={(textAge) => this.setState ({textAge})}
        placeholder = "Ex: 20"
        label = "Age"
        />

        <Text style={styles.subtitle}>Date Of Birth</Text>
        <TextInput 
        autoCapitalize ='none'
        autoCorrect={false}
        style={styles.input}
        onChangeText={(textDob) => this.setState ({textDob})}
        placeholder = "DD/MM/YYYY"
        label = "DOB"
        />

        <Text style={styles.subtitle}>Married</Text>
        <TextInput 
        autoCapitalize ='none'
        autoCorrect={false}
        style={styles.input}
        onChangeText={(textMarriage) => this.setState ({textMarriage})}
        placeholder = "Ex: Yes or No"
        label = "Marriage"
        />
        
        <TouchableHighlight
        style={styles.login}
        onPress={this.saveData.bind(this)}
        underlayColor='#fff'
        >
            <Text style={styles.loginText}>Regist</Text>
    </TouchableHighlight>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
     );


    };

    saveData(){
        let identitynumber = this.state.textNumber;
        let identitytype = this.state.textType;
        let name = this.state.textName;
        let age = this.state.textAge;
        let dob = this.state.textDob;
        let marriage = this.state.textMarriage;

        AsyncStorage.setItem('name',name);
        AsyncStorage.setItem('age',age);
        AsyncStorage.setItem('identitynumber',identitynumber);
        AsyncStorage.setItem('identitytype',identitytype);
        AsyncStorage.setItem('dob',dob);
        AsyncStorage.setItem('marriage',marriage)

        this.setState({
            identitynumber: identitynumber,
            identitytype: identitytype,
            name: name,
            age: age,
            dob: dob,
            marriage: marriage
        });
        alert ('Data saved');
    }

};




const styles = StyleSheet.create({
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
        },
    input: {
        fontSize: 13,
        marginVertical: 10,
        marginHorizontal :40,
        height: 35,
        backgroundColor: '#FFFFFF',
        paddingLeft: 8,
    },
    login:{
        marginRight:40,
        marginLeft:40,
        marginTop:30,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#650D09',
        opacity:0.8,
        borderRadius:10,
        borderColor: '#fff',
      },
      loginText:{
          color:'#ffffff',
          textAlign:'center',
          fontWeight: "bold"
      },
      container: {
        height: 300,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        flexDirection:"column"
      }
});
