// Home
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import useTheme from '../theme/useTheme';
import { loginSchema } from '../validations/login.validation';
import { Formik, FormikProps } from 'formik';
import { LinearGradient } from 'expo-linear-gradient'

interface FormValues {
  phoneNumber: string;
}

const Login: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  const handleFormSubmit = (values: FormValues) => {
    // Handle form submission logic here
    console.log(values);
  };

  const initialValues: FormValues = {
    phoneNumber: ''
  }

  return (
    <LinearGradient colors={theme.gradient} style={styles.container}>
      <TouchableOpacity onPress={toggleTheme}>
        <Text style={styles.title}>Welcome</Text>
      </TouchableOpacity>

      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleFormSubmit}
      >
        {({ handleChange, handleSubmit, values, errors, isValid, isSubmitting }: FormikProps<FormValues>) => (
          <View>
            <View style={styles.inputContainer}>
              <TextInput
                maxLength={10}
                placeholder="Phone Number (Ex: 07...)"
                onChangeText={handleChange('phoneNumber')}
                value={values.phoneNumber}
                style={styles.input}
              />
              {errors.phoneNumber && <Text style={styles.error}>{errors.phoneNumber}</Text>}
            </View>
            {/* <Button title="Proceed" disabled={isSubmitting || !isValid} onPress={() => handleSubmit()} /> */}
            <TouchableOpacity
              style={[styles.button, !isValid && styles.buttonDisabled]}
              onPress={() => handleSubmit()}
              disabled={!isValid}
            >
              <Text style={styles.buttonText}>Proceed</Text>
            </TouchableOpacity>
          </View>
        )}

      </Formik>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: "100%",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    marginVertical: 24,
  },
  inputContainer: {
    height: 70
  },
  input: {
    paddingVertical: 10,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  error: {
    color: 'red',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.3
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Login;
