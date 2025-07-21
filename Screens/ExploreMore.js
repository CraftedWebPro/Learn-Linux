import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Switch } from 'react-native';
import { useTheme } from './ThemeContext';

const ExploreMore = ({ navigation }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleExploreOption = (option) => {
    if (option === 'StartingLinux') {
      navigation.navigate('StartingLinux');
    } else if (option === 'Credit') {
      navigation.navigate('Credit');
    } else if (option === 'FunFact') {
      navigation.navigate('FunFact');
    }
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Image source={require('../assets/penguin.png')} style={styles.image} />

      <Text style={[styles.heading, isDarkMode && styles.darkText]}>Explore More Options</Text>
      <Text style={[styles.funnyText, isDarkMode && styles.darkText]}>Because penguins always have more to explore!</Text>

      <TouchableOpacity style={styles.button} onPress={() => handleExploreOption('StartingLinux')}>
        <Text style={styles.buttonText}>Things to do after installing Linux</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleExploreOption('Credit')}>
        <Text style={styles.buttonText}>Know the Developer</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleExploreOption('FunFact')}>
        <Text style={styles.buttonText}>Fun Facts</Text>
      </TouchableOpacity>

      <View style={styles.darkModeContainer}>
        <Text style={[styles.darkModeText, isDarkMode && styles.darkText]}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
    paddingHorizontal: 20,
  },
  darkContainer: {
    backgroundColor: '#2c3e50', // Dark background color
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  darkText: {
    color: '#ecf0f1', // Light text color for dark mode
  },
  funnyText: {
    fontStyle: 'italic',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2ecc71',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  darkModeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  darkModeText: {
    fontSize: 16,
    color: '#fff',
    marginRight: 10,
  },
});

export default ExploreMore;
