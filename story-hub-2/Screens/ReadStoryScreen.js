import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ToastAndroid
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.allText}>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>STORY HUB APP</Text>
        </TouchableOpacity>

        <Text style={styles.displayText}>
Read Story
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    backgroundColor: '#ef7b64',
    flex: 1,
    fontFamily: 'comic sans ms',
  },
  header: {
    backgroundColor: 'lightblue',
    border: 'dashed',
  },
  headerText: {
    fontFamily: 'Eras Bold ITC',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  displayText: {
    fontFamily: 'Eras Bold ITC',
    fontSize: 20,
    padding: 15,
    textAlign:'center'
  },
});
