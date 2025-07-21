import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Linking, ScrollView } from 'react-native';
import { useTheme } from './ThemeContext';

const Credit = () => {
  const { isDarkMode } = useTheme();
  const disclaimerText = "Disclaimer: I'm not a professional app developer, so if there's anything wrong with this app, just remember, with great power comes great responsibility!";
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextChar = disclaimerText.substring(0, typedText.length + 1);
      setTypedText(nextChar);
    }, 100);

    return () => clearTimeout(timer);
  }, [typedText]);

  const handleEmailPress = () => {
    Linking.openURL('mailto:craftedwebpro@gmail.com');
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.heading, isDarkMode && styles.darkText]}>Developer Information</Text>

      <View style={styles.infoContainer}>
        <Text style={[styles.label, isDarkMode && styles.darkText]}>Name:</Text>
        <Text style={[styles.text, isDarkMode && styles.darkText, styles.name]}>Vivek Tamang</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={[styles.label, isDarkMode && styles.darkText]} onPress={handleEmailPress}>Email:</Text>
        <Text style={[styles.text, isDarkMode && styles.darkText, styles.email]} onPress={handleEmailPress}>craftedwebpro@gmail.com</Text>
      </View>

      <Text style={[styles.funnyParagraph, isDarkMode && styles.darkText]}>
        As a developer, I believe in the magical power of Linux commands. They say a penguin walks into a bar,
        hands the bartender a floppy disk, and says, "I'll have something on the rocks." For more laughs or
        tech discussions, feel free to drop me an email!
      </Text>

      <Text style={[styles.note, isDarkMode && styles.darkText]}>About the App:</Text>
      <Text style={[styles.noteContent, isDarkMode && styles.darkText]}>
        Hey there! Just a heads-up, this app is totally free and it's nothing fancy, just a bunch of fun Linux commands
        to get you started. Oh, and by the way, you can find all this information on the Linux website too, I'm not
        reinventing the wheel here!
      </Text>

      <Text style={[styles.note, isDarkMode && styles.darkText]}>Credit:</Text>
      <Text style={[styles.noteContent, isDarkMode && styles.darkText]}>
        So, here's the deal. I didn't wake up one day and decide to create this app out of the blue. Nope, it was actually
        a friend of mine who recently bought a laptop and wanted to learn Linux. I thought, "Hey, why not make it fun for
        everyone?" So, I did! And now, here we are. Enjoy!
      </Text>

      <Text style={[styles.motivationalText, isDarkMode && styles.darkText]}>
        Remember, in the world of Linux, even the smallest penguin can make a big difference. So go ahead, explore, tinker,
        and have fun with it! Happy Linux-ing!
      </Text>

      <Text style={[styles.disclaimer, isDarkMode && styles.darkText]}>
        {typedText}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f5f9', // Light blue background
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop:10,
  },
  darkContainer: {
    backgroundColor: '#232323', // Dark gray background for dark mode
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2ecc71', // Green color for heading
    fontStyle: 'italic',
    textAlign: 'center', // Center-align heading
  },
  darkText: {
    color: '#fff', // White text color for dark mode
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#3498db', // Blue color for label
  },
  text: {
    fontSize: 16,
    color: '#333', // Dark gray text color
  },
  name: {
    color: '#2ecc71', // Green color for name
  },
  email: {
    color: '#3498db', // Blue color for email
    textDecorationLine: 'underline', // Underline the email
  },
  funnyParagraph: {
    fontSize: 16,
    color: '#333', // Dark gray text color
    marginBottom: 15,
    fontStyle: 'italic',
  },
  note: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#2ecc71', // Green color for note
    fontStyle: 'italic',
  },
  noteContent: {
    fontSize: 16,
    color: '#333', // Dark gray text color
    marginBottom: 15,
  },
  motivationalText: {
    fontSize: 16,
    color: '#555', // Dark gray text color
    fontStyle: 'italic',
    textAlign: 'center',
  },
  disclaimer: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#777',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default Credit;
