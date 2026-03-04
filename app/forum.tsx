import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS } from '../src/constants/colors';
import { Ionicons } from '@expo/vector-icons';

const FORUM_POSTS = [
  { id: '1', title: 'Doğurganlığı artırmak için hangi beslenme programını uygulamalıyım?', author: 'Kullanıcı1', date: '2024-06-10', replies: 3 },
  { id: '2', title: 'Yoga ve meditasyon deneyimlerini paylaşabilir misiniz?', author: 'Kullanıcı2', date: '2024-06-08', replies: 7 },
  { id: '3', title: 'İkinci tur IVF sürecinizde neler yaşadınız?', author: 'Kullanıcı3', date: '2024-06-05', replies: 12 },
  { id: '4', title: 'D vitamini eksikliği ve doğurganlık ilişkisi hakkında bilgi alabillir miyim?', author: 'Kullanıcı4', date: '2024-05-30', replies: 5 },
];

export default function ForumScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color={COLORS.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Forum</Text>
        <TouchableOpacity
          style={styles.newBtn}
          onPress={() => router.push('/new-topic')}
        >
          <Ionicons name="add" size={20} color={COLORS.white} />
          <Text style={styles.newBtnText}>Yeni Konu</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={FORUM_POSTS}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.postCard}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <View style={styles.postMeta}>
              <Text style={styles.postAuthor}>{item.author}</Text>
              <Text style={styles.postDate}>{item.date}</Text>
              <View style={styles.repliesChip}>
                <Ionicons name="chatbubble-outline" size={12} color={COLORS.primary} />
                <Text style={styles.repliesText}>{item.replies}</Text>
              </View>
            </View>
          </TouchableOpacity>
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
    gap: 12,
  },
  headerTitle: { flex: 1, fontSize: 18, fontWeight: '700', color: COLORS.text },
  newBtn: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    gap: 4,
  },
  newBtnText: { color: COLORS.white, fontWeight: '600', fontSize: 13 },
  list: { padding: 14 },
  postCard: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  postTitle: { fontSize: 15, fontWeight: '600', color: COLORS.text, marginBottom: 10, lineHeight: 22 },
  postMeta: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  postAuthor: { fontSize: 12, color: COLORS.primary, fontWeight: '600', flex: 1 },
  postDate: { fontSize: 11, color: COLORS.textMuted },
  repliesChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primaryLighter,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    gap: 3,
  },
  repliesText: { fontSize: 11, color: COLORS.primary, fontWeight: '600' },
});
