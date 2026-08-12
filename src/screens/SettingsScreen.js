import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';

import { useLanguage } from './LanguageContext';

const SettingsScreen = () => {
  const [showLanguage, setShowLanguage] = useState(false);

  const { language, setLanguage } = useLanguage();

  return (
    <View style={styles.container}>

      {/* Title */}
      <Text style={styles.title}>
        {language === 'en'
          ? 'Settings'
          : language === 'mr'
          ? 'सेटिंग्ज'
          : 'सेटिंग्स'}
      </Text>

      {/* Profile */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          👤 {language === 'en'
            ? 'Profile Settings'
            : language === 'mr'
            ? 'प्रोफाइल सेटिंग्ज'
            : 'प्रोफाइल सेटिंग्स'}
        </Text>
      </TouchableOpacity>

      {/* Notifications */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          🔔 {language === 'en'
            ? 'Notifications'
            : language === 'mr'
            ? 'सूचना'
            : 'सूचनाएं'}
        </Text>
      </TouchableOpacity>

      {/* Security */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          🔒 {language === 'en'
            ? 'Security'
            : language === 'mr'
            ? 'सुरक्षा'
            : 'सुरक्षा'}
        </Text>
      </TouchableOpacity>

      {/* Language Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowLanguage(true)}
      >
        <Text style={styles.buttonText}>
          🌐 {language === 'en'
            ? 'Language'
            : language === 'mr'
            ? 'भाषा'
            : 'भाषा'}
        </Text>
      </TouchableOpacity>

      {/* Language Modal */}
      <Modal
        visible={showLanguage}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>

          <View style={styles.languageBox}>

            {/* Modal Title */}
            <Text style={styles.languageTitle}>
              {language === 'en'
                ? 'Select Language'
                : language === 'mr'
                ? 'भाषा निवडा'
                : 'भाषा चुनें'}
            </Text>

            {/* English */}
            <TouchableOpacity
              style={styles.languageOption}
              onPress={() => {
                setLanguage('en');
                setShowLanguage(false);
              }}
            >
              <Text style={styles.languageText}>
                English
              </Text>
            </TouchableOpacity>

            {/* Marathi */}
            <TouchableOpacity
              style={styles.languageOption}
              onPress={() => {
                setLanguage('mr');
                setShowLanguage(false);
              }}
            >
              <Text style={styles.languageText}>
                मराठी
              </Text>
            </TouchableOpacity>

            {/* Hindi */}
            <TouchableOpacity
              style={styles.languageOption}
              onPress={() => {
                setLanguage('hi');
                setShowLanguage(false);
              }}
            >
              <Text style={styles.languageText}>
                हिन्दी
              </Text>
            </TouchableOpacity>

            {/* Close */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowLanguage(false)}
            >
              <Text style={styles.closeText}>
                {language === 'en'
                  ? 'Close'
                  : language === 'mr'
                  ? 'बंद करा'
                  : 'बंद करें'}
              </Text>
            </TouchableOpacity>

          </View>

        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 20,
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#1E88E5',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  languageBox: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },

  languageTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  languageOption: {
    backgroundColor: '#1E88E5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
  },

  languageText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  closeButton: {
    padding: 12,
    alignItems: 'center',
  },

  closeText: {
    color: '#1E88E5',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default SettingsScreen;