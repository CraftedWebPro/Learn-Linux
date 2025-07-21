import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useTheme } from './ThemeContext';

const Advanced = ({ navigation }) => {
  const { isDarkMode } = useTheme();

  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.heading, isDarkMode && styles.darkHeading]}>Advanced Level</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Welcome to the Advanced level of Learn Linux! Prepare for deep dives into complex Linux concepts and strategies.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 1: Kernel Configuration</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins optimize their kernel for performance. Let's explore kernel configuration:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo make menuconfig
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Configure the Linux kernel using a text-based interface.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 2: Filesystem Encryption</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins keep their data secure with filesystem encryption. Learn about encryption methods:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo cryptsetup luksFormat /dev/sdX
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Encrypt a block device using LUKS (Linux Unified Key Setup).
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 3: Advanced Network Configuration</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins master advanced networking. Dive into complex network configurations:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo ip route add default via gateway_ip
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Add a default route to the routing table.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 4: Performance Monitoring with DTrace</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins monitor system performance with DTrace. Explore dynamic tracing:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo dtrace -n {'syscall:::entry {console.log("Advanced DTrace Lesson"); }'}
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Trace system calls using DTrace.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 5: Custom Kernel Modules</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins extend their kernel with custom modules. Create your own kernel module:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ nano custom_module.c
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Write a simple kernel module using the nano editor.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 6: Advanced BASH Scripting</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins automate with advanced BASH scripting. Explore advanced scripting techniques:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sed -i 's/old_string/new_string/' filename
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Replace a string in a file using sed.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 7: Linux Security Modules (LSM)</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins enhance security with Linux Security Modules. Learn about SELinux and AppArmor:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo setenforce enforcing
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Set SELinux to enforcing mode.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 8: Advanced Package Management</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins optimize package management. Explore advanced package management strategies:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo dpkg-reconfigure -plow package_name
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Reconfigure an installed package with dpkg.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 9: Kernel Tuning for Performance</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins fine-tune their kernels for optimal performance. Learn about kernel tuning:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sysctl -w parameter=value
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Set a kernel parameter at runtime using sysctl.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 10: Advanced RAID Configurations</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins ensure data redundancy with advanced RAID configurations. Explore RAID levels:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo mdadm --create --verbose /dev/md0 --level=5 --raid-devices=3 /dev/sdX /dev/sdY /dev/sdZ
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Create a RAID-5 array with mdadm.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 11: High Availability Clustering</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins ensure system availability with high-availability clustering. Explore clustering concepts:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo crm configure
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Configure a cluster using the Pacemaker CRM shell.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 12: Linux Virtualization with KVM</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins virtualize with Kernel-based Virtual Machine (KVM). Set up virtual machines:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo virt-install --name=vm_name --memory=2048 --disk size=20
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Install a virtual machine using virt-install.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 13: Linux Containers (LXC)</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins embrace lightweight containers. Explore Linux Containers (LXC):
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo lxc-create -n container_name -t ubuntu
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Create an Ubuntu container with LXC.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 14: Advanced Firewalls with iptables</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins secure their networks with advanced iptables rules. Explore advanced firewall configurations:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Allow SSH traffic with iptables.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lesson 15: Linux Performance Tuning</Text>

      <Text style={[styles.content, isDarkMode && styles.darkContent]}>
        Penguins optimize system performance. Dive into advanced Linux performance tuning:
      </Text>

      <Text style={[styles.command, isDarkMode && styles.darkCommand]}>
        $ sudo perf top
      </Text>

      <Text style={[styles.commandDescription, isDarkMode && styles.darkCommandDescription]}>
        Display a live, updating view of system performance using perf.
      </Text>

      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Recommended Resources:</Text>

      <TouchableOpacity onPress={() => openLink('https://www.kernel.org/doc/html/latest/')}>
        <Text style={[styles.link, isDarkMode && styles.darkLink]}>
          - Linux Kernel Documentation for in-depth knowledge about the Linux kernel.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => openLink('https://www.suse.com/documentation/sle/')}>
        <Text style={[styles.link, isDarkMode && styles.darkLink]}>
          - SUSE Linux Enterprise Documentation for advanced Linux topics and configurations.
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

export default Advanced;
