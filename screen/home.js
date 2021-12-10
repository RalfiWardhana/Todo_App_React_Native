import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ScrollView,Image } from 'react-native';
import {API} from "../config/api"


export default function Home({navigation}) {
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
const done = async(aidi) => {
  try {   
      const response = await API.patch(`/todo/${aidi}`,{isDone:"Done"})
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
      <View style={{display:'flex',flexDirection:'row', justifyContent:'space-evenly',marginTop:20,marginBottom:15}}>
          <TouchableOpacity onPress={() => navigation.navigate("Add-Todo")} style={{width:80,height:30,backgroundColor:"#3e6bc1",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:5}}><Text style={{color:"white"}}>Add To Do</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Done")} style={{width:80,height:30,backgroundColor:"#54ab67",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:5}}><Text style={{color:"white"}}>Done</Text></TouchableOpacity>
      </View> 
      <View style={{display:'flex',flexDirection:'row', justifyContent:'center',marginBottom:15}}>
        <Text style={{fontSize:25}}>Your Todo's</Text>  
      </View> 
      {todos.filter((statuss)=>statuss.isDone=="none").map((todo)=>(
      <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:20}}> 
        <View style={{width:"90%",height:80,backgroundColor:"#4a2bd4",borderRadius:10,display:"flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:'center',marginBottom:15}}>
            <Text style={{color:"white",fontSize:15}}>{todo.toddo}</Text>   
            <View>
                <Text style={{color:"white"}}>{todo.clock}</Text>
                <Text style={{color:"white"}}>{todo.date}</Text>
            </View>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly', width:"100%"}}>
            <TouchableOpacity onPress={() => navigation.navigate("Edit-Todo",{id:todo.id})} style={{width:80,height:30,backgroundColor:"#f89807",display:'flex',justifyContent:'center',alignItems:'center',borderRadius:5}}><Text style={{color:"white"}}>Edit</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> deleting(todo.id) } style={{width:80,height:30,backgroundColor:"#df2820",display:'flex',justifyContent:'center',alignItems:'center',borderRadius:5}}><Text style={{color:"white"}}>Delete</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> done(todo.id) } style={{width:80,height:30,backgroundColor:"#0fba13",display:'flex',justifyContent:'center',alignItems:'center',borderRadius:5}}><Text style={{color:"white"}}>Done</Text></TouchableOpacity>
        </View>
      </View>
      ))}   
      </ScrollView> 
    </View>
  );
}