### **Frontend Code**

#### `frontend/App.js`
```javascript
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InsuranceForm from './screens/InsuranceForm';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="InsuranceForm">
                <Stack.Screen name="InsuranceForm" component={InsuranceForm} options={{ title: 'Insurance Form' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
```
