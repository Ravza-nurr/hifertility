import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from 'expo-router';
import { COLORS } from '../../src/constants/colors';
import { Ionicons } from '@expo/vector-icons';

const MENU_ITEMS = [
  { label: 'Bildirim', icon: 'notifications-outline' },
  { label: 'Ev Ödevi', icon: 'book-outline' },
  { label: 'Danışmanlık', icon: 'chatbubbles-outline' },
  { label: 'Yol Haritam', icon: 'map-outline' },
  { label: 'Kurslar', icon: 'play-circle-outline' },
  { label: 'Blog', icon: 'newspaper-outline' },
  { label: 'Anket', icon: 'stats-chart-outline' },
  { label: 'Forum', icon: 'people-outline' },
  { label: 'İletişim', icon: 'call-outline' },
  { label: 'Hakkımızda', icon: 'information-circle-outline' },
  { label: 'Onam', icon: 'document-text-outline' },
  { label: 'Kısa Bilgiler', icon: 'bulb-outline' },
];

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profil</Text>
      </View>
      <ScrollView>
        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>E</Text>
          </View>
          <Text style={styles.name}>Esra ARBAĞ</Text>
        </View>
        {MENU_ITEMS.map((item) => (
          <TouchableOpacity
            key={item.label}
            style={styles.menuItem}
            onPress={() => (navigation as any).openDrawer?.()}
          >
            <Ionicons name={item.icon as any} size={22} color={COLORS.primary} style={styles.menuIcon} />
            <Text style={styles.menuLabel}>{item.label}</Text>
            <Ionicons name="chevron-forward" size={18} color={COLORS.textMuted} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.background },
  header: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  headerTitle: { color: COLORS.white, fontSize: 20, fontWeight: '700' },
  profileSection: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    paddingBottom: 28,
    paddingTop: 8,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.4)',
  },
  avatarText: { fontSize: 32, fontWeight: 'bold', color: COLORS.primary },
  name: { color: COLORS.white, fontSize: 18, fontWeight: '700' },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  menuIcon: { marginRight: 14 },
  menuLabel: { flex: 1, fontSize: 15, color: COLORS.text },
});
