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

  const { language, setLanguage, t } = useLanguage();

  return (
    <View style={styles.container}>

      {/* Title */}
      <Text style={styles.title}>
        {t.settings}
      </Text>

      {/* Profile Settings */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          👤 {t.profileSettings}
        </Text>
      </TouchableOpacity>

      {/* Notifications */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          🔔 {t.notifications}
        </Text>
      </TouchableOpacity>

      {/* Security */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          🔒 {t.security}
        </Text>
      </TouchableOpacity>

      {/* Language */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowLanguage(true)}
      >
        <Text style={styles.buttonText}>
          🌐 {t.language}
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

            <Text style={styles.languageTitle}>
              {t.selectLanguage}
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
                {t.close}
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