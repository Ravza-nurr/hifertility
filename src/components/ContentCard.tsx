import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { COLORS } from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';

interface ContentCardProps {
  title: string;
  summary: string;
  author?: string;
  date?: string;
  image?: string;
  likes?: number;
  comments?: number;
  views?: number;
  liked?: boolean;
  onLike?: () => void;
  onComment?: () => void;
  onPress?: () => void;
}

export default function ContentCard({
  title,
  summary,
  author,
  date,
  image,
  likes = 0,
  comments = 0,
  views = 0,
  liked = false,
  onLike,
  onComment,
  onPress,
}: ContentCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      {author && (
        <View style={styles.authorRow}>
          <View style={styles.authorAvatar}>
            <Text style={styles.avatarText}>H</Text>
          </View>
          <View>
            <Text style={styles.authorName}>{author}</Text>
            {date && <Text style={styles.date}>{date}</Text>}
          </View>
          <TouchableOpacity style={styles.moreBtn}>
            <Ionicons name="ellipsis-horizontal" size={18} color={COLORS.textMuted} />
          </TouchableOpacity>
        </View>
      )}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.summary} numberOfLines={3}>{summary}</Text>
      {image && (
        <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
      )}
      {(likes !== undefined) && (
        <Text style={styles.stats}>
          {likes} Beğeni - {comments} Yorum - {views} Görüntüleme
        </Text>
      )}
      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.actionBtn} onPress={onLike}>
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
        <TouchableOpacity style={styles.actionBtn} onPress={onComment}>
          <Ionicons name="chatbubble-outline" size={18} color={COLORS.textSecondary} />
          <Text style={styles.actionText}>Yorum Ekle</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 3,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  authorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  authorName: {
    fontWeight: '600',
    color: COLORS.text,
    fontSize: 14,
  },
  date: {
    color: COLORS.textMuted,
    fontSize: 12,
    marginTop: 1,
  },
  moreBtn: {
    marginLeft: 'auto',
    padding: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 8,
    lineHeight: 24,
  },
  summary: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 12,
  },
  stats: {
    fontSize: 12,
    color: COLORS.textMuted,
    marginBottom: 12,
  },
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
  actionText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  divider: {
    width: 1,
    backgroundColor: COLORS.border,
  },
});
