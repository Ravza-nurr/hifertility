import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { COLORS } from '../../src/constants/colors';
import { COURSES } from '../../src/data/courses';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleVideoCompleted } from '../../src/store/progressSlice';
import { RootState } from '../../src/store';
import { VideoView, useVideoPlayer } from 'expo-video';

export default function VideoPlayerScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const dispatch = useDispatch();
  const completedVideos = useSelector((state: RootState) => state.progress.completedVideos);

  let video = null;
  for (const course of COURSES) {
    const found = course.videos.find(v => v.id === id);
    if (found) { video = found; break; }
  }

  const isCompleted = video ? completedVideos.includes(video.id) : false;

  const player = useVideoPlayer(video?.url ?? '', p => {
    p.loop = false;
  });

  const handleToggleComplete = () => {
    if (!video) return;
    dispatch(toggleVideoCompleted(video.id));
    if (!isCompleted) {
      Alert.alert('Tebrikler! 🎉', 'Bu ders tamamlandı olarak işaretlendi.');
    }
  };

  if (!video) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
          <Text style={styles.backText}>Geri</Text>
        </TouchableOpacity>
        <View style={styles.center}>
          <Text>Video bulunamadı</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{video.title}</Text>
        </View>

        <VideoView
          player={player}
          style={styles.video}
          allowsFullscreen
          allowsPictureInPicture
        />

        <View style={styles.infoSection}>
          <Text style={styles.videoTitle}>{video.title}</Text>
          <Text style={styles.duration}>Süre: {video.duration}</Text>

          <TouchableOpacity
            style={[styles.completeBtn, isCompleted && styles.completedBtn]}
            onPress={handleToggleComplete}
            activeOpacity={0.8}
          >
            <Ionicons
              name={isCompleted ? 'checkmark-circle' : 'checkmark-circle-outline'}
              size={22}
              color={COLORS.white}
            />
            <Text style={styles.completeBtnText}>
              {isCompleted ? 'Tamamlandı ✓' : 'Tamamlandı Olarak İşaretle'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.white },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  backBtn: { marginRight: 12, flexDirection: 'row', alignItems: 'center' },
  backText: { color: COLORS.primary, fontSize: 16 },
  headerTitle: { fontSize: 17, fontWeight: '700', color: COLORS.text, flex: 1 },
  video: { width: '100%', height: 240, backgroundColor: '#000' },
  infoSection: { padding: 20 },
  videoTitle: { fontSize: 20, fontWeight: '700', color: COLORS.text, marginBottom: 6 },
  duration: { fontSize: 14, color: COLORS.textMuted, marginBottom: 24 },
  completeBtn: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
  },
  completedBtn: { backgroundColor: COLORS.success },
  completeBtnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
