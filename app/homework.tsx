import React, { useState } from 'react';
import {
  View, Text, Image, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity
} from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS } from '../src/constants/colors';
import { HOMEWORK } from '../src/data/articles';
import { Ionicons } from '@expo/vector-icons';

export default function HomeworkScreen() {
  const router = useRouter();
  const [liked, setLiked] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color={COLORS.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ev Ödevi</Text>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={styles.authorRow}>
            <View style={styles.authorAvatar}>
              <Text style={styles.avatarText}>H</Text>
            </View>
            <View style={styles.authorInfo}>
              <Text style={styles.authorName}>{HOMEWORK.author}</Text>
              <Text style={styles.date}>{HOMEWORK.date}</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="ellipsis-horizontal" size={18} color={COLORS.textMuted} />
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>{HOMEWORK.title}</Text>
          <Text style={styles.summary}>{HOMEWORK.summary}</Text>

          {HOMEWORK.image && (
            <Image source={{ uri: HOMEWORK.image }} style={styles.image} resizeMode="cover" />
          )}

          <Text style={styles.stats}>
            {HOMEWORK.likes} Beğeni - {HOMEWORK.comments} Yorum - {HOMEWORK.views} Görüntüleme
          </Text>

          <View style={styles.actionsRow}>
            <TouchableOpacity style={styles.actionBtn} onPress={() => setLiked(!liked)}>
              <Ionicons
                name={liked ? 'heart' : 'heart-outline'}
                size={18}
                color={liked ? COLORS.primary : COLORS.textSecondary}
              />
              <Text style={[styles.actionText, liked && { color: COLORS.primary }]}>
                {liked ? 'Beğendiniz' : 'Beğen'}
              </Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity style={styles.actionBtn}>
              <Ionicons name="chatbubble-outline" size={18} color={COLORS.textSecondary} />
              <Text style={styles.actionText}>Yorum Ekle</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => router.push('/submit-homework')}
          activeOpacity={0.85}
        >
          <Ionicons name="send" size={20} color={COLORS.white} />
          <Text style={styles.submitBtnText}>Ödevimi Gönder</Text>
        </TouchableOpacity>

        <View style={{ height: 30 }} />
      </ScrollView>
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
    gap: 12,
  },
  headerTitle: { flex: 1, fontSize: 18, fontWeight: '700', color: COLORS.text },
  addBtn: { padding: 4 },
  scroll: { flex: 1, padding: 14 },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  authorRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 14 },
  authorAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  avatarText: { color: COLORS.white, fontWeight: 'bold', fontSize: 18 },
  authorInfo: { flex: 1 },
  authorName: { fontWeight: '700', color: COLORS.text, fontSize: 15 },
  date: { fontSize: 12, color: COLORS.textMuted, marginTop: 2 },
  title: { fontSize: 20, fontWeight: '700', color: COLORS.text, marginBottom: 10, lineHeight: 26 },
  summary: { fontSize: 14, color: COLORS.textSecondary, lineHeight: 22, marginBottom: 14 },
  image: { width: '100%', height: 200, borderRadius: 12, marginBottom: 12 },
  stats: { fontSize: 12, color: COLORS.textMuted, marginBottom: 12 },
  actionsRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: 12,
  },
  actionBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  actionText: { fontSize: 14, color: COLORS.textSecondary, fontWeight: '500' },
  divider: { width: 1, backgroundColor: COLORS.border },
  submitBtn: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 14,
    gap: 10,
    marginHorizontal: 4,
  },
  submitBtnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
