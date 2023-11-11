import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, ScrollView } from 'react-native'
import { IconButton,  } from 'react-native-paper';

import React, { useState } from 'react'




const Home = () => {

   const [isLoanding, setLoanding]= useState ("");
   const [isList, setList]=useState([]);
 
   


   const handle_Delete=(id)=>{

    const updateList=isList.filter((isLoanding)=>isLoanding.id !==id)

    setList(updateList);
   

   }

   

   const handle_add =()=>{

    if (isLoanding === ""){
      return;
    }


    setList([...isList,{id: Date.now().toString(), title:isLoanding}]);
    setLoanding("");

    
   }


   
  
   const lista = ({item,index})=>{

    return(
    <View style={styles.list}>
    

     <Text style={{color: "#ffff", fontWeight:"bold", fontSize: 19, flex: 1}}  onPress={()=>handle_Edit(item)}>{item.title}</Text>
   
     <IconButton icon= "trash-can" iconColor="#C70039" onPress={()=>handle_Delete(item.id)}></IconButton>
    </View>

    )
   }
  
  
    return (




   
      <ScrollView>
    <View style={{ marginHorizontal: 16, marginTop: 40, backgroundColor: "#ffff" }}>
      <TextInput style={styles.Textimput}
        placeholder='Agrega una nota'

        value={isLoanding}
        onChangeText={(userText)=> setLoanding(userText)}/>
          
          
        <TouchableOpacity style={styles.button} 
         onPress={()=> handle_add()}
        >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20, }}>
             Guardar
          </Text>
          
          
          
        </TouchableOpacity>
           
           <View>
           <FlatList data={isList} renderItem={lista}/>
           </View>
           

      
     
        
      
    </View>
    </ScrollView>
   
  )
}

export default Home

const styles = StyleSheet.create({
    Textimput: {
      
        borderWidth: 2,
        borderColor: "#000",
        borderRadius: 6,
        paddingVertical: 25,
        paddingHorizontal: 20,
        TextSize:10,

    },

    button:{
        backgroundColor: "#000",
            borderRadius: 6,
            paddingVertical: 25,
            marginVertical: 34,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 3,
            
        
      },

      TxtAgregar :{
        color:" #ffff"



      },
      list:{
        backgroundColor: "#1e90ff",
          borderRadius: 6,
          paddingHorizontal: 6,
          paddingVertical: 20,
          marginBottom: 12,
          flexDirection: "row",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 3,
        

      }


  });