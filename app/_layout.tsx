import '../global.css';
import React, { useEffect } from 'react';
import { Drawer } from 'expo-router/drawer';
import { Provider, useDispatch } from 'react-redux';
import { store } from '../src/store';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { COLORS } from '../src/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loadProgress } from '../src/store/progressSlice';
import { useRouter } from 'expo-router';

const MENU_ITEMS = [
  { label: 'Bildirim', icon: 'notifications-outline', route: '/(tabs)/notifications' },
  { label: 'Ev Ödevi', icon: 'book-outline', route: '/homework' },
  { label: 'Danışmanlık', icon: 'chatbubbles-outline', route: '/placeholder' },
  { label: 'Yol Haritam', icon: 'map-outline', route: '/placeholder' },
  { label: 'Kurslar', icon: 'play-circle-outline', route: '/(tabs)/courses' },
  { label: 'Blog', icon: 'newspaper-outline', route: '/short-info' },
  { label: 'Anket', icon: 'stats-chart-outline', route: '/survey' },
  { label: 'Forum', icon: 'people-outline', route: '/forum' },
  { label: 'İletişim', icon: 'call-outline', route: '/placeholder' },
  { label: 'Hakkımızda', icon: 'information-circle-outline', route: '/placeholder' },
  { label: 'Onam', icon: 'document-text-outline', route: '/placeholder' },
  { label: 'Kısa Bilgiler', icon: 'bulb-outline', route: '/short-info' },
];

function CustomDrawerContent(props: any) {
  const router = useRouter();

  const handleNavigate = (route: string) => {
    props.navigation.closeDrawer();
    router.push(route as any);
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0 }}>
      <View style={styles.drawerHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>E</Text>
        </View>
        <Text style={styles.username}>Esra ARBAĞ</Text>
      </View>
      {MENU_ITEMS.map((item, index) => (
        <TouchableOpacity
          key={`${item.label}-${index}`}
          style={styles.menuItem}
          onPress={() => handleNavigate(item.route)}
        >
          <Ionicons name={item.icon as any} size={22} color={COLORS.primary} style={styles.menuIcon} />
          <Text style={styles.menuLabel}>{item.label}</Text>
          <Ionicons name="chevron-forward" size={16} color={COLORS.textMuted} />
        </TouchableOpacity>
      ))}
    </DrawerContentScrollView>
  );
}

function AppContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem('completedVideos').then(data => {
      if (data) dispatch(loadProgress(JSON.parse(data)));
    });
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name="index" />
        <Drawer.Screen name="(tabs)" />
        <Drawer.Screen name="course/[id]" />
        <Drawer.Screen name="video/[id]" />
        <Drawer.Screen name="article/[id]" />
        <Drawer.Screen name="homework" />
        <Drawer.Screen name="submit-homework" />
        <Drawer.Screen name="short-info" />
        <Drawer.Screen name="forum" />
        <Drawer.Screen name="new-topic" />
        <Drawer.Screen name="survey" />
        <Drawer.Screen name="placeholder" />
      </Drawer>
    </>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: COLORS.primary,
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 4,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.4)',
  },
  avatarText: { fontSize: 28, fontWeight: 'bold', color: COLORS.primary },
  username: { color: COLORS.white, fontSize: 18, fontWeight: '700' },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    backgroundColor: COLORS.white,
  },
  menuIcon: { marginRight: 14 },
  menuLabel: { flex: 1, fontSize: 15, color: COLORS.text, fontWeight: '500' },
});
