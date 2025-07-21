import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useTheme } from './ThemeContext';

const Intermediate = ({ navigation }) => {
  const { isDarkMode } = useTheme();

  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.heading, isDarkMode && styles.darkHeading]}>Intermediate Level</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Congratulations! You've graduated to the Intermediate level of Learn Linux. Get ready for more advanced commands and penguin adventures. 🚀🐧
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 1: Advanced File Operations</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins master the art of file operations. Let's take it up a notch:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ cp -r source_directory destination_directory
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Copy a directory and its contents recursively.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ mv file_or_directory new_location
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Move a file or directory to a new location.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 2: Process Management</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins multitask like pros. Let's manage processes efficiently:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ ps
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Display information about active processes.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ kill process_id
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Terminate a process using its ID.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 3: Networking</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins stay connected. Explore networking commands:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ ifconfig
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Display network interface configuration.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ ping website.com
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Check the connectivity to a website.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 4: System Monitoring</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins keep an eye on system performance:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ top
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Display real-time system statistics.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 5: Package Management</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins keep their software up to date. Let's dive into package management:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo apt-get update
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Update the package lists for available software updates.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo apt-get upgrade
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Upgrade installed packages to their latest versions.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 6: Advanced Shell Scripting</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins automate tasks with shell scripts. Let's create advanced scripts:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ nano script.sh
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Open the nano editor to create a shell script.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ chmod +x script.sh
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Make the script executable.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 7: User and Group Management</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins maintain user accounts and groups. Let's dive into user management:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo adduser username
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Add a new user to the system.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo usermod -aG groupname username
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Add a user to an existing group.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 8: Advanced Permissions</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins control access with advanced file permissions. Let's explore:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ chmod permissions filename
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Change the permissions of a file.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 9: Shell Environment Variables</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins use environment variables. Let's understand and set them:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ export VARIABLE=value
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Set an environment variable.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 10: System Backup and Restore</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins keep their data safe. Learn about system backup and restore:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ tar -czvf backup.tar.gz /path/to/backup
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Create a compressed backup of a directory.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 11: Log Files and Monitoring</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins review logs for troubleshooting. Explore log files and monitoring:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ tail -n 50 /var/log/syslog
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Display the last 50 lines of the system log.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 12: SSH and Remote Access</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins connect securely to remote servers. Learn about SSH and remote access:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ ssh username@remote_server
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Connect to a remote server using SSH.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 13: Containerization with Docker</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins love containers! Learn about Docker for containerization:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ docker run -it ubuntu /bin/bash
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Run an interactive Ubuntu container.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 14: Version Control with Git</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins collaborate using version control. Get started with Git:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ git init
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Initialize a new Git repository.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 15: Web Server Setup with Nginx</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins host websites. Set up a web server with Nginx:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo apt-get install nginx
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Install Nginx on your system.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Recommended Resources:</Text>

      <TouchableOpacity onPress={() => openLink('https://linuxacademy.com/')}>
        <Text style={[styles.link, isDarkMode && styles.darkLink]}>
          - Level up your Linux skills with courses and hands-on labs at Linux Academy.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => openLink('https://www.digitalocean.com/docs/')}>
        <Text style={[styles.link, isDarkMode && styles.darkLink]}>
          - DigitalOcean's extensive documentation for in-depth Linux tutorials and guides.
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
  darkContainer: {
    backgroundColor: '#333', // Dark mode background color
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    fontStyle: 'italic',
  },
  darkHeading: {
    color: '#fff', // Dark mode text color
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  darkSectionTitle: {
    color: '#fff', // Dark mode text color
  },
  content: {
    fontSize: 16,
    marginBottom: 15,
    color: '#555',
  },
  darkContent: {
    color: '#bbb', // Dark mode text color
  },
  command: {
    fontFamily: 'monospace',
    fontSize: 16,
    color: '#3498db',
    marginBottom: 5,
  },
  darkCommand: {
    color: '#bb86fc', // Dark mode text color
  },
  commandDescription: {
    fontSize: 14,
    color: '#777',
    marginBottom: 15,
  },
  darkCommandDescription: {
    color: '#bbb', // Dark mode text color
  },
  link: {
    fontSize: 16,
    color: '#3498db',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  darkLink: {
    color: '#bb86fc', // Dark mode link color
  },
});

export default Intermediate;
