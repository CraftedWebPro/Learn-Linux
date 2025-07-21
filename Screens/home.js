import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Linking, Switch } from 'react-native';
import { useTheme } from './ThemeContext';

const Home = ({ navigation }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [typedDisclaimer, setTypedDisclaimer] = useState('');
  const [typedHeading, setTypedHeading] = useState('');
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const disclaimerText = "This app provides a playful glimpse into the Linux world and is not a comprehensive guide. For more Linux content, check out our tutorials or join the discussion at Linux.org.";
    const headingText = "Welcome to Learn Linux!";

    let index = 0;

    const typingInterval = setInterval(() => {
      if (!showDisclaimer) {
        setTypedHeading(headingText.substring(0, index) + "_");
      } else {
        setTypedDisclaimer(disclaimerText.substring(0, index));
      }
      index++;

      if (!showDisclaimer && index > headingText.length) {
        clearInterval(typingInterval);
        setTimeout(() => setShowDisclaimer(true), 2000); // Display disclaimer after 2 seconds
      }
      if (index > disclaimerText.length) {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [showDisclaimer]);

  const handleButtonPress = (level) => {
    if (level === 'Explore') {
      navigation.navigate('ExploreMore');
    } else {
      navigation.navigate(level);
    }
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Image source={require('../assets/penguin.png')} style={styles.image} />

      <Text style={[styles.welcomeText, isDarkMode && styles.darkText]}>
        {typedHeading}
      </Text>
      <Text style={[styles.funnyText, isDarkMode && styles.darkText]}>
        Because penguins need love too!
      </Text>

      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, { flex: 1 }]} onPress={() => handleButtonPress('Beginner')}>
            <Text style={styles.buttonText}>Beginner</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { flex: 1 }]} onPress={() => handleButtonPress('Intermediate')}>
            <Text style={styles.buttonText}>Inter</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, { flex: 1 }]} onPress={() => handleButtonPress('Advanced')}>
            <Text style={styles.buttonText}>Advanced</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.exploreButton, { flex: 1 }]} onPress={() => handleButtonPress('Explore')}>
            <Text style={styles.exploreButtonText}>Explore</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.darkModeContainer}>
        <Text style={[styles.darkModeText, isDarkMode && styles.darkText]}>
          Dark Mode: {isDarkMode ? 'On' : 'Off'}
        </Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>

      {showDisclaimer && (
        <View style={styles.disclaimerContainer}>
          <Text style={[styles.disclaimerText, isDarkMode && styles.darkText]}>
            Disclaimer:
          </Text>
          <View style={styles.disclaimerContent}>
            <Text style={styles.disclaimerText}>
              {typedDisclaimer}
            </Text>
            <Text style={[styles.link, styles.disclaimerText]} onPress={() => Linking.openURL('https://www.linux.org/forums/linux-beginner-tutorials.123/')}>
              Linux.org
            </Text>
            <Text style={styles.disclaimerText}>
              .
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },
  darkContainer: {
    backgroundColor: '#2c3e50', // Dark background color
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  welcomeText: {
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
  },
  buttonContainer: {
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2980b9', // Blue color reflecting Linux branding
    paddingVertical: 20, // Increase padding for prominence
    paddingHorizontal: 30, // Increase horizontal padding for better spacing
    borderRadius: 15, // Rounded corners for a modern look
    marginHorizontal: 10, // Adjust margin for spacing between buttons
    marginBottom: 20, // Increase margin bottom for spacing between rows
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16, // Adjust the font size as needed
    textAlign: 'center',
  },
  exploreButton: {
    backgroundColor: '#e67e22', // Orange color for Explore More button
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  exploreButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
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
  disclaimerContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  disclaimerText: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#fff',
    textAlign: 'center',
  },
  link: {
    color: '#3498db',
    textDecorationLine: 'underline',
  },
  disclaimerContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default Home;
