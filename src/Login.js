import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Background from './Background';
import {darkGreen} from './Constants'
import Field from './Field';
import Btn from './Btn';

const Login = (props) => {
    return (
        <Background>
        <View style={{alignItems:"center", 
           width: 460 }}>
           <Text style={{
             color:"white", 
             fontSize: 64, 
             fontWeight: 'bold',
              marginVertical:10}}
              >Login
              </Text> 
           <View style={{
            backgroundColor:"white",
            height:759,
            width:460,
            borderTopLeftRadius:130,
            paddingTop:50,
            alignItems:'center',
             }} >
           <Text style={{
            fontSize:35,
             color:darkGreen,
             fontWeight: 'bold' }}>
             Welcome Back
             </Text>
           <Text style={{color:"grey",fontSize:19,fontWeight:"bold",marginBottom:20}}>
            Login to your account</Text>
            <Field placeholder="Email/Username" keyboardType= {"email-address"}/>
            <Field placeholder="Password" secureTextEntry= {true}/>
            <View
             style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 250}}> 
             <Text style={{color: darkGreen, fontWeight: 'bold',fontSize: 16}}>
                Forgot Password?
             </Text>
            </View>
            <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" Press={() => alert
            ("Logged In")}/>
            <View style= {{display:'flex',flexDirection: 'row', justifyContent:
             'center'}}>
                 <Text style={{fontSize: 16, fontWeight: "bold" }}> Don't have an account?</Text>
                <TouchableOpacity onPress={()=> props.navigation.navigate("Signup")}>
                <Text style={{color: darkGreen, fontWeight:'bold',fontSize:16}}> Sign Up
             </Text>
             </TouchableOpacity>
            </View>
           </View>
           </View>
        </Background>
    );
}



export default Login;
