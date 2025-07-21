import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useTheme } from './ThemeContext';

const Beginner = ({ navigation }) => {
  const { isDarkMode } = useTheme();

  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));

  };

  return (
    <ScrollView contentContainerStyle={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.heading, isDarkMode && styles.darkHeading]}>Beginner Level</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Welcome to the beginner level of Learn Linux! In this section, we'll embark on a journey into the world of penguins and command-line mysteries.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 1: Basic Commands</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Start by mastering the fundamental commands every penguin should know:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ ls
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        List files and directories in the current directory.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ cd directory_name
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Change to a different directory.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ mkdir new_directory
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Create a new directory.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ touch filename
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Create an empty file.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 2: File Manipulation</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins are great organizers. Learn file manipulation commands:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ cp source_file destination
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Copy a file to a new location.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ mv old_name new_name
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Rename a file or directory.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ rm filename
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Remove a file.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 3: Text Editing with Nano</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins often edit text files. Learn to use the Nano text editor:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ nano filename
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Open a file for editing with Nano.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        (Ctrl + X) to exit, (Y) to save changes, (Enter) to confirm.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 4: Understanding Permissions</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins care about who can access their igloos. Understand Linux file permissions:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ ls -l
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        View detailed file information, including permissions.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ chmod permissions filename
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Change file permissions.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 5: Basic System Information</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins stay informed about their systems. Learn to check system information:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ uname -a
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Display system information.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ free -h
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        View available memory.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 6: Package Management</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins use package managers to install software:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo apt-get update
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Update the list of available packages.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo apt-get install package_name
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Install a new package.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 7: File Searching</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins search for files efficiently:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ find /path/to/search -name filename
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Search for a file in a specific directory.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ grep search_term filename
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Search for a term within a file.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 8: Text Processing</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins process text like pros:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ cat filename
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Display the contents of a file.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ head -n 5 filename
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Display the first 5 lines of a file.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 9: File Compression</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins compress and decompress files effortlessly:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ tar -cvzf archive_name.tar.gz /path/to/directory
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Create a compressed archive.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ tar -xvzf archive_name.tar.gz
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Extract files from a compressed archive.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 10: System Updates</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins keep their systems up-to-date:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo apt-get upgrade
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Upgrade installed packages.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo apt-get dist-upgrade
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Upgrade to a new distribution release.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 11: Networking Basics</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins understand networking essentials:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ ifconfig
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        View network interface configurations.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ ping target_address
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Check network connectivity.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 12: User Management</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins manage users gracefully:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo adduser new_username
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Add a new user.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo usermod -aG sudo existing_username
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Add an existing user to the sudo group.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 13: Process Management</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins multitask efficiently with process management:
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
        Terminate a process by its ID.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 14: Shell Scripting Basics</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins automate tasks with shell scripting:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ nano my_script.sh
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Create a shell script with Nano.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ chmod +x my_script.sh
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Make the script executable.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ ./my_script.sh
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Execute the script.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 15: Backup and Restore</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins value their data. Learn to backup and restore:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ rsync -av source_directory destination
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Synchronize files between directories.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ tar -cvzf backup_name.tar.gz /path/to/data
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Create a compressed backup.
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ tar -xvzf backup_name.tar.gz -C /path/to/restore
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Restore data from a compressed backup.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Recommended Resources:</Text>

     <Text style={[styles.link, isDarkMode && styles.darkLink]} onPress={() => openLink('https://linuxjourney.com/')}>
        - Linux Journey (Interactive Online Tutorial)
      </Text>

      <Text style={[styles.link, isDarkMode && styles.darkLink]} onPress={() => openLink('https://www.digitalocean.com/community/tutorial_series/getting-started-with-linux')}>
        - DigitalOcean Linux Tutorials
      </Text>
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

export default Beginner;
