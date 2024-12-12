import React from 'react';
import { View, TextInput, Text, StyleSheet, TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Use react-native-vector-icons for the icon

interface StyledInputFieldProps {
  label: string;
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
}

const StyledInputField: React.FC<StyledInputFieldProps> = ({ label, value, placeholder, onChangeText }) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <Icon name="person-circle-outline" size={24} color="#17C1E8" />
        <Text style={styles.label}>
          {label} <Text style={styles.required}>*</Text>
        </Text>
      </View>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#9E9E9E"
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 10,
    width: '100%',
    shadowColor: '#17C1E8',
    shadowOffset: { width: 10, height: 19 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 15,
    marginVertical: 15,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    color: '#000000',
    marginLeft: 8,
  },
  required: {
    color: '#17C1E8',
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
    color: '#000000',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
});

export default StyledInputField;
