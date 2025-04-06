import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import '../global.css';
export default function App() {
  return (
    <View>
      <Text className='text-rose-600'>Main</Text>
      <StatusBar style='auto' />
    </View>
  );
}
