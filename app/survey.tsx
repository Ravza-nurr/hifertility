import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS } from '../src/constants/colors';
import { Ionicons } from '@expo/vector-icons';

const QUESTIONS = [
  { id: 1, question: 'HiFertility uygulamasından genel memnuniyetiniz?' },
  { id: 2, question: 'Video derslerin içerik kalitesini nasıl değerlendirirsiniz?' },
  { id: 3, question: 'Ev ödevlerinin faydalılığını nasıl değerlendirirsiniz?' },
  { id: 4, question: 'Uygulamayı başkalarına önerir misiniz?' },
  { id: 5, question: 'Kısa bilgilerin anlaşılırlığını nasıl buluyorsunuz?' },
];

export default function SurveyScreen() {
  const router = useRouter();
  const [ratings, setRatings] = useState<Record<number, number>>({});

  const rate = (questionId: number, value: number) => {
    setRatings(prev => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    const answered = Object.keys(ratings).length;
    if (answered < QUESTIONS.length) {
      Alert.alert('Uyarı', 'Lütfen tüm soruları cevaplayınız.');
      return;
    }
    Alert.alert('Teşekkürler!', 'Anket yanıtlarınız kaydedildi.', [
      { text: 'Tamam', onPress: () => router.back() }
    ]);
  };

  const allAnswered = Object.keys(ratings).length === QUESTIONS.length;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color={COLORS.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Anket</Text>
      </View>

      <ScrollView style={styles.scroll}>
        <Text style={styles.description}>
          Deneyiminizi değerlendirmeniz bizim için çok önemlidir. Her soru için 1 (çok kötü) ile 5 (mükemmel) arasında puan veriniz.
        </Text>

        {QUESTIONS.map(q => (
          <View key={q.id} style={styles.questionCard}>
            <Text style={styles.questionText}>{q.id}. {q.question}</Text>
            <View style={styles.starsRow}>
              {[1, 2, 3, 4, 5].map(star => (
                <TouchableOpacity
                  key={star}
                  onPress={() => rate(q.id, star)}
                  style={styles.starBtn}
                >
                  <Ionicons
                    name={ratings[q.id] >= star ? 'star' : 'star-outline'}
                    size={32}
                    color={ratings[q.id] >= star ? '#F4C430' : COLORS.border}
                  />
                  <Text style={styles.starLabel}>{star}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        <TouchableOpacity
          style={[styles.submitBtn, !allAnswered && styles.submitBtnDisabled]}
          onPress={handleSubmit}
        >
          <Text style={styles.submitBtnText}>Anketi Gönder</Text>
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
  headerTitle: { fontSize: 18, fontWeight: '700', color: COLORS.text },
  scroll: { flex: 1, padding: 16 },
  description: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 22,
    marginBottom: 20,
    backgroundColor: COLORS.primaryLighter,
    padding: 14,
    borderRadius: 12,
  },
  questionCard: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  questionText: { fontSize: 14, fontWeight: '600', color: COLORS.text, marginBottom: 14, lineHeight: 20 },
  starsRow: { flexDirection: 'row', justifyContent: 'space-around' },
  starBtn: { alignItems: 'center' },
  starLabel: { fontSize: 12, color: COLORS.textMuted, marginTop: 2 },
  submitBtn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  submitBtnDisabled: { backgroundColor: COLORS.textMuted },
  submitBtnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
