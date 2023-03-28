import React, {useState,useEffect} from 'react';
import {View, Text,Button} from 'react-native';


const App = () => {
  
  const [helloFlag,setHelloFlag] = useState(true)

  function updateFlag(){
    setHelloFlag(!helloFlag)
  }

  return (
    <View>
     <Text>Hello life cycle</Text>
      <Button title='Click' onPress={updateFlag} />
     {helloFlag && <Hello /> }   
     {/* conditional views (kondisyonel görüntüleme) */}
    </View>
  );
};

export default App;


function Hello(){

  // Componentin kaldırılma yeri
  useEffect(()=>{
    console.log("Merhaba Dünya");

 
    return () => {
      console.log("Gidiyorum bütün aşklar yüreğimde");
    }

  }, []);

  return (
    <View style={{backgroundColor:'aqua',padding:20}}>
      <Text >Hello Componenti</Text>
    </View>
  )
}
