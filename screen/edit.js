import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,SafeAreaView,ScrollView } from 'react-native';
import {API} from "../config/api"

export default function EditToDo({route,navigation}) {
  const {id} = route.params;
  const [toddo,setToddo] = useState("")
  const [date,setDate] = useState("")
  const [clock,setClock] = useState("")
  const[todo,setTodo] =useState([])
  const getTodo = async() => {
    try {   
        const response = await API.get("/todo/"+id)
        console.log(response.data.data)
        setToddo(response.data.data.toddo)
        setDate(response.data.data.date)
        setClock(response.data.data.clock)
    } catch (error) {
        console.log(error)
    }
}
const edit = async() => {
  try {   
      const response = await API.patch(`/todo/${id}`,{toddo:toddo,date:date,clock:clock,isDone:"none"})
      navigation.replace('Home')
  } catch (error) {
      console.log(error)
  }
}
useEffect(()=>{
  getTodo()
},[])

  return (
    <View> 
      <ScrollView>
        <View style={{display:'flex',flexDirection:'row', justifyContent:'space-evenly',marginTop:20,marginBottom:50}}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{width:120,height:30,backgroundColor:"#3e6bc1",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:5}}><Text style={{color:"white"}}>Back To Home</Text></TouchableOpacity>
        </View>
        <View style={{width:"100%",marginBottom:20}}>
          <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:10}}>
              <Text style={{fontSize:20}}>Edit To Do</Text>
          </View>  
          <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:10}}>
              <TextInput style={{backgroundColor:"#d4d6d9",width:"80%",padding:10,borderRadius:5}} value={toddo}  onChangeText={(val)=> setToddo(val)}/>
          </View>
        </View> 
        <View style={{width:"100%",marginBottom:20}}>
          <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:10}}>
              <Text style={{fontSize:20}}>Date Schedule</Text>
          </View>  
          <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:10}}>
              <TextInput style={{backgroundColor:"#d4d6d9",width:"80%",padding:10,borderRadius:5}} value={date} onChangeText={(val)=> setDate(val)}/>
          </View>
        </View> 
        <View style={{width:"100%",marginBottom:20}}>
          <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:10}}>
              <Text style={{fontSize:20}}>Clock Schedule</Text>
          </View>  
          <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:10}}>
              <TextInput style={{backgroundColor:"#d4d6d9",width:"80%",padding:10,borderRadius:5}} value={clock} onChangeText={(val)=> setClock(val)}/>
          </View>
        </View> 
        <View style={{justifyContent:"center",alignItems:"center"}}>
          <TouchableOpacity onPress={()=>edit()} style={{width:"80%", padding:10, borderRadius:5, justifyContent:'center',alignItems:'center',backgroundColor:"#3e6bc1"}}><Text style={{color:"white"}}>EDIT</Text></TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}