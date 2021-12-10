import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ScrollView  } from 'react-native';
import {API} from "../config/api"


export default function Done({navigation}) {
  const[todos,setTodos] =useState([])
  const getTodos = async() => {
    try {   
        const response = await API.get("/todos")
        console.log(response.data.data)
        setTodos(response.data.data)
    } catch (error) {
        console.log(error)
    }
  }
  const deleting = async(aidi) => {
    try {   
        const response = await API.delete("/todo/"+aidi)
        const responseData = await API.get("/todos")
        setTodos(responseData.data.data)
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(()=>{
    getTodos()
  },[])
  return (
    <View> 
      <ScrollView> 
        <View style={{display:'flex',flexDirection:'row', justifyContent:'space-evenly',marginTop:20,marginBottom:50}}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{width:120,height:30,backgroundColor:"#3e6bc1",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:5}}><Text style={{color:"white"}}>Back To Home</Text></TouchableOpacity>
        </View> 
        {todos.filter((statuss)=>statuss.isDone=="Done").map((todo)=>(
        <View style={{marginBottom:20}}>  
          <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}> 
            <View style={{width:"90%",height:80,backgroundColor:"#54ab67",borderRadius:10,display:"flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:'center',marginBottom:15}}>
                <Text style={{color:"white",fontSize:15}}>{todo.toddo}</Text>   
                <View>
                    <Text style={{color:"white"}}>{todo.clock}</Text>
                    <Text style={{color:"white"}}>{todo.date}</Text>
                </View>
            </View>
          </View>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly', width:"100%"}}>
            <TouchableOpacity onPress={()=> deleting(todo.id) } style={{width:80,height:30,backgroundColor:"#df2820",display:'flex',justifyContent:'center',alignItems:'center',borderRadius:5}}><Text style={{color:"white"}}>Delete</Text></TouchableOpacity>
          </View>
        </View>
        ))}  
      </ScrollView>
    </View>
  );
}