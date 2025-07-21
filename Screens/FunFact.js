import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from './ThemeContext';

const FunFact = () => {
  const { isDarkMode } = useTheme();

  const funFacts = [
    "The first version of Linux, released by Linus Torvalds in 1991, was just a kernel and didn't include any user interface.",
    "The name 'Linux' is a combination of Linus (after Linus Torvalds) and Unix (the operating system upon which Linux is based).",
    "There are over 100 different distributions of Linux, each with its own unique features and characteristics.",
    "Linux is the most commonly used operating system for servers, powering more than 90% of the world's supercomputers.",
    "The Linux kernel is written in the C programming language, with some parts also written in assembly language.",
    "The mascot of Linux is a penguin named Tux, created by Larry Ewing in 1996.",
    "Many of the world's largest tech companies, including Google, Facebook, and Amazon, use Linux extensively in their infrastructure.",
    "The Android operating system, used by billions of smartphones and tablets worldwide, is based on the Linux kernel.",
    "Linux is open-source, meaning that anyone can view, modify, and distribute its source code.",
    "The largest collaborative software development project in history, the Linux kernel has been continuously developed and improved by thousands of contributors from around the world.",
    "The first ever version of Linux kernel was 0.01, and it was released on September 17, 1991.",
    "Linux-based operating systems are used not only in computers but also in various other devices like routers, smartwatches, and even in the International Space Station.",
    "The Linux kernel has been modified to run on a wide range of devices, from tiny embedded systems to massive supercomputers.",
    "One of the main reasons behind the popularity of Linux is its stability, security, and the ability to customize it according to individual needs.",
    "The concept of 'free software' is integral to the Linux philosophy, promoting the freedom to use, study, modify, and distribute software.",
    "Linux has a strong community of users and developers who contribute to its development, support each other, and promote its adoption worldwide."
  ];

  const randomIndex = Math.floor(Math.random() * funFacts.length);
  const randomFunFact = funFacts[randomIndex];

  const guideText = "Go back and come again for another fun fact!";

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.funFact, isDarkMode && styles.darkText]}>🐧 Fun Fact:</Text>
      <Text style={[styles.funFactContent, isDarkMode && styles.darkText]}>{randomFunFact}</Text>
      <Text style={[styles.guideText, isDarkMode && styles.darkText]}>{guideText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f5f9', // Light blue background
    borderRadius: 10,
    marginBottom: 20,
  },
  darkContainer: {
    backgroundColor: '#232323', // Dark gray background for dark mode
  },
  funFact: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2ecc71', // Green color for fun fact
    marginBottom: 10,
  },
  darkText: {
    color: '#fff', // White text color for dark mode
  },
  funFactContent: {
    fontSize: 16,
    color: '#333', // Dark gray text color
    marginBottom: 10,
  },
  guideText: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#888', // Gray color for guide text
    marginTop: 10,
  },
});

export default FunFact;
