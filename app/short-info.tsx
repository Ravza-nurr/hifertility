import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS } from '../src/constants/colors';
import { SHORT_INFO_ARTICLES } from '../src/data/articles';
import ContentCard from '../src/components/ContentCard';
import { Ionicons } from '@expo/vector-icons';

export default function ShortInfoScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={22} color={COLORS.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Kısa Bilgiler</Text>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.globalActions}>
        <TouchableOpacity style={styles.globalBtn}>
          <Ionicons name="heart-outline" size={18} color={COLORS.textSecondary} />
          <Text style={styles.globalBtnText}>Beğen</Text>
        </TouchableOpacity>
        <View style={styles.btnDivider} />
        <TouchableOpacity style={styles.globalBtn}>
          <Ionicons name="chatbubble-outline" size={18} color={COLORS.textSecondary} />
          <Text style={styles.globalBtnText}>Yorum Ekle</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={SHORT_INFO_ARTICLES}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <ContentCard
            title={item.title}
            summary={item.summary}
            author={item.author}
            date={item.date}
            image={item.image}
            likes={item.likes}
            comments={item.comments}
            views={item.views}
            onPress={() => router.push(`/article/${item.id}` as any)}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  backBtn: { marginRight: 12 },
  headerTitle: { flex: 1, fontSize: 18, fontWeight: '700', color: COLORS.text },
  addBtn: { padding: 4 },
  globalActions: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingVertical: 10,
  },
  globalBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  globalBtnText: { fontSize: 14, color: COLORS.textSecondary, fontWeight: '500' },
  btnDivider: { width: 1, backgroundColor: COLORS.border },
  list: { padding: 14 },
});
