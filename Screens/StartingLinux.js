import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const StartingLinux = ({ navigation }) => {
  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  const isDarkMode = false; // Set to true if using dark mode

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.heading, isDarkMode && styles.darkHeading]}>Getting Started with Linux</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Congratulations on installing Linux! Here are some essential tasks to do after the installation.
      </Text>

      {/* Section 1: Update and Upgrade System */}
      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>1. Update and Upgrade System</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Keep your system up to date with the latest security patches and software upgrades.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo apt update
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Update the package lists for available software updates.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo apt upgrade
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Upgrade installed packages to their latest versions.
      </Text>

      {/* Section 2: Install Essential Software */}
      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>2. Install Essential Software</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Install necessary tools and software for a productive Linux environment.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo apt install git nano curl
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Install Git, Nano (a text editor), and Curl (for transferring data).
      </Text>

      {/* Section 3: Explore the File System */}
      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>3. Explore the File System</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Learn about the Linux file system and navigate through directories.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ cd /path/to/directory
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Change your current working directory.
      </Text>

      {/* Section 4: User Account Management */}
      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>4. User Account Management</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Manage user accounts, passwords, and permissions.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo adduser username
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Add a new user to the system.
      </Text>

      {/* Section 5: Set Up SSH for Remote Access */}
      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>5. Set Up SSH for Remote Access</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Securely access your Linux machine remotely using SSH.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo apt install openssh-server
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Install the OpenSSH server for secure remote access.
      </Text>

      {/* ... Additional sections ... */}

      {/* Recommended Resources Section */}
      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Recommended Resources:</Text>

      <TouchableOpacity onPress={() => openLink('https://linuxjourney.com/')}>
        <Text style={[styles.link, isDarkMode && styles.darkLink]}>
          - Linux Journey: An interactive online learning platform for mastering Linux.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => openLink('https://www.linux.com/')}>
        <Text style={[styles.link, isDarkMode && styles.darkLink]}>
          - Linux.com: A comprehensive resource for news, articles, and tutorials on Linux.
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    fontStyle: 'italic',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  content: {
    fontSize: 16,
    marginBottom: 15,
    color: '#555',
  },
  command: {
    fontFamily: 'monospace',
    fontSize: 16,
    color: '#3498db',
    marginBottom: 5,
  },
  commandDescription: {
    fontSize: 14,
    color: '#777',
    marginBottom: 15,
  },
  link: {
    fontSize: 16,
    color: '#3498db',
    textDecorationLine: 'underline',
    marginBottom: 15,
  },
  // Additional Styles for Dark Mode
  darkHeading: {
    color: '#fff',
  },
  darkSectionTitle: {
    color: '#fff',
  },
  darkContent: {
    color: '#ddd',
  },
  darkCommand: {
    color: '#78c7ff',
  },
  darkCommandDescription: {
    color: '#bbb',
  },
  darkLink: {
    color: '#78c7ff',
  },
});

export default StartingLinux;
