import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { COLORS } from '../../src/constants/colors';
import { SHORT_INFO_ARTICLES } from '../../src/data/articles';
import { Ionicons } from '@expo/vector-icons';

export default function ArticleDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const article = SHORT_INFO_ARTICLES.find(a => a.id === id);

  if (!article) return null;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color={COLORS.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>{article.title}</Text>
      </View>
      <ScrollView style={styles.scroll}>
        {article.image && (
          <Image source={{ uri: article.image }} style={styles.image} resizeMode="cover" />
        )}
        <View style={styles.body}>
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.content}>{article.content}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.white },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerTitle: { flex: 1, fontSize: 16, fontWeight: '600', color: COLORS.text },
  image: { width: '100%', height: 220 },
  scroll: { flex: 1 },
  body: { padding: 20 },
  title: { fontSize: 22, fontWeight: '700', color: COLORS.text, marginBottom: 16, lineHeight: 30 },
  content: { fontSize: 15, color: COLORS.textSecondary, lineHeight: 26 },
});
