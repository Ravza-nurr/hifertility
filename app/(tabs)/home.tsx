import React from 'react';
import {
  View, Text, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView,
} from 'react-native';
import { useRouter, useNavigation } from 'expo-router';
import { COLORS } from '../../src/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { SHORT_INFO_ARTICLES, HOMEWORK } from '../../src/data/articles';
import ContentCard from '../../src/components/ContentCard';

export default function HomeScreen() {
  const router = useRouter();
  const navigation = useNavigation();

  const handleDrawer = () => {
    (navigation as any).openDrawer?.();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleDrawer} style={styles.menuBtn}>
          <Ionicons name="menu" size={26} color={COLORS.white} />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>H</Text>
          </View>
          <Text style={styles.headerTitle}>HiFertility</Text>
        </View>
        <TouchableOpacity onPress={() => router.push('/(tabs)/notifications')} style={styles.bellBtn}>
          <Ionicons name="notifications-outline" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Doğurganlık Yolculuğunuza</Text>
        <Text style={styles.bannerTitle}>Hoş Geldiniz 🌸</Text>
        <Text style={styles.bannerSubtitle}>Sağlıklı ve keyifli bir süreç için buradayız</Text>
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Quick Access */}
        <View style={styles.quickRow}>
          <TouchableOpacity style={styles.quickCard} onPress={() => router.push('/homework')}>
            <Ionicons name="book" size={28} color={COLORS.primary} />
            <Text style={styles.quickLabel}>Ev Ödevi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickCard} onPress={() => router.push('/short-info')}>
            <Ionicons name="bulb" size={28} color={COLORS.primary} />
            <Text style={styles.quickLabel}>Kısa Bilgiler</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickCard} onPress={() => router.push('/(tabs)/courses')}>
            <Ionicons name="play-circle" size={28} color={COLORS.primary} />
            <Text style={styles.quickLabel}>Kurslar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickCard} onPress={() => router.push('/forum')}>
            <Ionicons name="people" size={28} color={COLORS.primary} />
            <Text style={styles.quickLabel}>Forum</Text>
          </TouchableOpacity>
        </View>

        {/* Sections */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Kısa Bilgiler</Text>
            <TouchableOpacity onPress={() => router.push('/short-info')}>
              <Text style={styles.seeAll}>Tümünü Gör</Text>
            </TouchableOpacity>
          </View>
          {SHORT_INFO_ARTICLES.slice(0, 2).map(article => (
            <ContentCard
              key={article.id}
              title={article.title}
              summary={article.summary}
              author={article.author}
              date={article.date}
              image={article.image}
              likes={article.likes}
              comments={article.comments}
              views={article.views}
              onPress={() => router.push(`/article/${article.id}` as any)}
            />
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Ev Ödevi</Text>
            <TouchableOpacity onPress={() => router.push('/homework')}>
              <Text style={styles.seeAll}>Tümünü Gör</Text>
            </TouchableOpacity>
          </View>
          <ContentCard
            title={HOMEWORK.title}
            summary={HOMEWORK.summary}
            author={HOMEWORK.author}
            date={HOMEWORK.date}
            image={HOMEWORK.image}
            likes={HOMEWORK.likes}
            comments={HOMEWORK.comments}
            views={HOMEWORK.views}
            onPress={() => router.push('/homework')}
          />
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 14,
  },
  menuBtn: { padding: 4 },
  bellBtn: { padding: 4 },
  headerCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '700',
  },
  banner: {
    backgroundColor: COLORS.primaryDark,
    padding: 20,
    paddingBottom: 24,
  },
  bannerTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
  },
  bannerSubtitle: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 13,
    marginTop: 4,
  },
  scroll: {
    flex: 1,
    padding: 16,
  },
  quickRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    marginTop: 4,
  },
  quickCard: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 14,
    alignItems: 'center',
    paddingVertical: 14,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  quickLabel: {
    fontSize: 11,
    color: COLORS.text,
    marginTop: 6,
    fontWeight: '500',
    textAlign: 'center',
  },
  section: {
    marginBottom: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
  },
  seeAll: {
    fontSize: 13,
    color: COLORS.primary,
    fontWeight: '600',
  },
});
