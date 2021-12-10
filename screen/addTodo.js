import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,SafeAreaView,ScrollView,Button } from 'react-native';
import {API} from "../config/api"
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';


export default function AddToDo({navigation}) {
  const [toddo,setToddo] = useState("")
  const [dates,setDates] = useState("")
  const [clock,setClock] = useState("")

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  Moment.locale('en');

  const inputTodo = async() => {
    try {    
        const response = await API.post(`/todo`,{toddo:toddo,date:Moment(date).format('LL'),clock:Moment(date).format('LT'),isDone:"none"})
        setToddo("")
        setClock("")
        navigation.navigate("Home")
    } catch (error) {
        console.log(error)
    }
  }



  

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };


  return (
    <View> 
      <ScrollView>
        <View style={{display:'flex',flexDirection:'row', justifyContent:'space-evenly',marginTop:20,marginBottom:20}}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{width:120,height:30,backgroundColor:"#3e6bc1",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:5}}><Text style={{color:"white"}}>Home</Text></TouchableOpacity>
        </View>
        <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginBottom:30}}>
          <Text style={{fontSize:30}}>Hello What would you do</Text>
        </View>
        <View style={{width:"100%",marginBottom:20}}>
          <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:10}}>
              <Text style={{fontSize:20}}>Add To Do</Text>
          </View>  
          <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:10}}>
              <TextInput style={{backgroundColor:"#d4d6d9",width:"80%",padding:10,borderRadius:5}} value={toddo} onChangeText={(val)=> setToddo(val)}/>
          </View>
        </View> 
        {/* <View style={{width:"100%",marginBottom:20}}>
          <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:10}}>
              <Text style={{fontSize:20}}>Date Schedule</Text>
          </View>  
          <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:10}}>
              <TextInput style={{backgroundColor:"#d4d6d9",width:"80%",padding:10,borderRadius:5}} value={dates} onChangeText={(val)=> setDates(val)}/>
          </View>
        </View> 
        <View style={{width:"100%",marginBottom:20}}>
          <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:10}}>
              <Text style={{fontSize:20}}>Clock Schedule</Text>
          </View>  
          <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:10}}>
              <TextInput style={{backgroundColor:"#d4d6d9",width:"80%",padding:10,borderRadius:5}} value={clock} onChangeText={(val)=> setClock(val)}/>
          </View>
        </View>  */}
        <View style={{alignItems:'center'}}>
          <View style={{width:"80%", marginBottom:20}}> 
            <Button onPress={showDatepicker} title="Show date picker!"  />
          </View>
          <View style={{width:"80%", marginBottom:20}}>
            <Button onPress={showTimepicker} title="Show time picker!" />
          </View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>
        <View style={{justifyContent:"center",alignItems:"center"}}>
          <TouchableOpacity onPress={()=>inputTodo()} style={{width:"80%", padding:20, borderRadius:5, justifyContent:'center',alignItems:'center',backgroundColor:"#3e6bc1"}}><Text style={{color:"white"}}>SUBMIT</Text></TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}