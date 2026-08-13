import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Alert,
} from 'react-native';

const ComplaintFeedback = () => {
  const [feedback, setFeedback] = useState('');

  const [feedbackList, setFeedbackList] = useState([
    
  ]);

  const handleSubmit = () => {
    if (feedback.trim() === '') {
      Alert.alert('Error', 'Please enter your feedback.');
      return;
    }

    const newFeedback = {
      id: Date.now().toString(),
      text: feedback,
    };

    setFeedbackList([...feedbackList, newFeedback]);
    setFeedback('');

    Alert.alert(
      'Success',
      'Feedback submitted successfully.'
    );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Complaint / Feedback
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your feedback"
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />

      <Button
        title="Submit"
        onPress={handleSubmit}
      />

      <FlatList
        style={styles.list}
        data={feedbackList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.item}>
              {item.text}
            </Text>
          </View>
        )}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },

  input: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    textAlignVertical: 'top',
  },

  list: {
    width: '100%',
    marginTop: 20,
  },

  row: {
    backgroundColor: '#F5F6FA',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },

  item: {
    fontSize: 16,
    color: '#333',
  },
});

export default ComplaintFeedback;