#### `frontend/screens/InsuranceForm.js`
```javascript
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function InsuranceForm() {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        dob: '',
        email: '',
        phone: '',
        insuranceType: '',
    });

    const handleSubmit = () => {
        fetch('http://localhost:5000/api/insurance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    Alert.alert('Error', data.error);
                } else {
                    Alert.alert('Success', data.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                Alert.alert('Error', 'Could not submit the form.');
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Insurance Application Form</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={formData.name}
                onChangeText={(text) => setFormData({ ...formData, name: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Gender"
                value={formData.gender}
                onChangeText={(text) => setFormData({ ...formData, gender: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Date of Birth"
                value={formData.dob}
                onChangeText={(text) => setFormData({ ...formData, dob: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={formData.email}
                onChangeText={(text) => setFormData({ ...formData, email: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={formData.phone}
                onChangeText={(text) => setFormData({ ...formData, phone: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Insurance Type"
                value={formData.insuranceType}
                onChangeText={(text) => setFormData({ ...formData, insuranceType: text })}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
    },
});
```
