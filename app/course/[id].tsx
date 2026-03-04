import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { COLORS } from '../../src/constants/colors';
import { COURSES } from '../../src/data/courses';
import VideoListItem from '../../src/components/VideoListItem';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../src/store';

export default function CourseDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const completedVideos = useSelector((state: RootState) => state.progress.completedVideos);

  const course = COURSES.find(c => c.id === id);
  if (!course) return null;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{course.title}</Text>
        </View>

        <Image source={{ uri: course.thumbnail }} style={styles.thumbnail} resizeMode="cover" />

        <View style={styles.courseInfo}>
          <Text style={styles.courseTitle}>{course.title}</Text>
          <View style={styles.subtitleBadge}>
            <Text style={styles.subtitleText}>{course.subtitle}</Text>
          </View>
        </View>

        <View style={styles.videoList}>
          {course.videos.map((video, index) => (
            <VideoListItem
              key={video.id}
              video={video}
              index={index + 1}
              isCompleted={completedVideos.includes(video.id)}
              onPress={() => router.push(`/video/${video.id}` as any)}
            />
          ))}
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
  backBtn: { marginRight: 12 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: COLORS.text },
  thumbnail: { width: '100%', height: 220 },
  courseInfo: { padding: 16,borderBottomWidth: 1, borderBottomColor: COLORS.border },
  courseTitle: { fontSize: 22, fontWeight: '700', color: COLORS.text, marginBottom: 8 },
  subtitleBadge: {
    backgroundColor: COLORS.primaryLighter,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  subtitleText: { color: COLORS.primary, fontWeight: '600', fontSize: 13 },
  videoList: {},
});
