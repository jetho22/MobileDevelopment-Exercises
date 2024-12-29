import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from './components/ThemeContext';
import { ThemeComponent } from './components/ThemeComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeProvider>
        <ThemeComponent/>
      </ThemeProvider>
      <StatusBar style="auto" />
    </View>
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
