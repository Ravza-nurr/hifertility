import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { Notification } from '../data/notifications';

interface NotificationItemProps {
  notification: Notification;
}

export default function NotificationItem({ notification }: NotificationItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {notification.image ? (
          <Image source={{ uri: notification.image }} style={styles.image} resizeMode="cover" />
        ) : (
          <View style={styles.iconBg}>
            <Ionicons name="mail-outline" size={20} color={COLORS.primary} />
          </View>
        )}
      </View>
      <View style={styles.content}>
        <Text style={styles.message}>{notification.message}</Text>
        <Text style={styles.date}>{notification.date} {notification.time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    padding: 14,
    marginBottom: 8,
    borderRadius: 12,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    marginRight: 12,
    marginTop: 2,
  },
  iconBg: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: COLORS.primaryLighter,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  content: {
    flex: 1,
  },
  message: {
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 20,
    marginBottom: 4,
    fontWeight: '500',
  },
  date: {
    fontSize: 12,
    color: COLORS.textMuted,
  },
});
