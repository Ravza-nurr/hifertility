import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { Video } from '../data/courses';

interface VideoListItemProps {
  video: Video;
  index: number;
  isCompleted: boolean;
  onPress: () => void;
}

export default function VideoListItem({ video, index, isCompleted, onPress }: VideoListItemProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.indexContainer}>
        {isCompleted ? (
          <Ionicons name="checkmark-circle" size={24} color={COLORS.success} />
        ) : (
          <Text style={styles.index}>{index}</Text>
        )}
      </View>
      <View style={styles.info}>
        <Text style={[styles.title, isCompleted && styles.completedTitle]}>{video.title}</Text>
        <Text style={styles.duration}>Video - {video.duration}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color={COLORS.textMuted} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    backgroundColor: COLORS.white,
  },
  indexContainer: {
    width: 32,
    alignItems: 'center',
  },
  index: {
    fontSize: 16,
    color: COLORS.textMuted,
    fontWeight: '600',
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 15,
    color: COLORS.text,
    fontWeight: '500',
    marginBottom: 2,
  },
  completedTitle: {
    color: COLORS.success,
  },
  duration: {
    fontSize: 12,
    color: COLORS.textMuted,
  },
});
