import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/bda-logo.jpg')} style={styles.logo} />

      <Text style={styles.title}>Hello</Text>
      <Text style={styles.subtitle}>
        You need to Sign In or Create an account.
      </Text>

      <View style={styles.formContainer}>
        <View style={styles.tabsContainer}>
          <View style={styles.flexRow}>
            <Text style={[styles.tab, styles.activeTab]}>Sign In</Text>
            <Text style={styles.tab}>Sign up</Text>
          </View>
          <Text style={styles.tab}>Reset</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
        />

        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles.optionsContainer}>
          <View style={styles.rememberMeContainer}>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={false}
                // onValueChange={setChecked}
                tintColors={{true: '#00aaff', false: '#888'}}
              />
            </View>
            <Text style={styles.rememberMeText}>Remember Me</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.orText}>or login with</Text>

        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aaff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginTop: 50,
  },
  checkboxContainer: {
    transform: [{scaleX: 0.7}, {scaleY: 0.7}], // Scale down the checkbox
  },
  title: {
    fontSize: 36,
    color: '#fff',
    marginTop: 10,
  },
  flexRow: {
    flexDirection: 'row',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#f9f9f9',
    paddingBottom: 40,
    marginVertical: 10,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingHorizontal: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
    marginTop: 40,
  },
  tab: {
    fontSize: 16,
    color: '#888',
  },
  activeTab: {
    color: '#000',
    fontWeight: 'bold',
    position: 'relative',
    marginRight: 10,
  },
  activeTabDot: {
    position: 'absolute',
    top: 20,
    left: '50%',
    width: 5,
    height: 5,
    backgroundColor: '#00aaff',
    borderRadius: 2.5,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#e9e9e9',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  signInButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#888888',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    marginLeft: 5,
    color: '#888',
  },
  forgotPasswordText: {
    color: '#888',
  },
  orText: {
    color: '#888',
    marginTop: 20,
    textAlign: 'center',
  },
  socialButton: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  googleButton: {
    backgroundColor: '#dd4b39',
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Login;
