import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './components/screens/Home';

export default function App() {
  return (
    
  <SafeAreaView>
       <StatusBar style="auto" />
   <View >
      <Home/>
    </View>

  </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
