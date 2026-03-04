import React, { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, SafeAreaView,
  TouchableOpacity, ScrollView, Alert
} from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS } from '../src/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function SubmitHomeworkScreen() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSend = () => {
    if (!title.trim() || !message.trim()) {
      Alert.alert('Uyarı', 'Lütfen başlık ve mesaj alanlarını doldurunuz.');
      return;
    }
    Alert.alert('Başarılı!', 'Ödeviniz başarıyla gönderildi.', [
      { text: 'Tamam', onPress: () => router.back() }
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color={COLORS.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ödevimi Gönder</Text>
        <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
          <Ionicons name="send" size={18} color={COLORS.white} />
          <Text style={styles.sendBtnText}>Gönder</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scroll} keyboardShouldPersistTaps="handled">
        <Text style={styles.label}>Kime: <Text style={styles.recipient}>Hifertility</Text></Text>

        <TextInput
          style={styles.titleInput}
          placeholder="Gönderinizin başlığını yazın"
          placeholderTextColor={COLORS.textMuted}
          value={title}
          onChangeText={setTitle}
        />

        <TextInput
          style={styles.messageInput}
          placeholder="Mesajınızı buraya yazınız"
          placeholderTextColor={COLORS.textMuted}
          value={message}
          onChangeText={setMessage}
          multiline
          textAlignVertical="top"
        />

        {image && (
          <View style={styles.imagePreview}>
            <Ionicons name="image" size={60} color={COLORS.primary} />
            <Text style={styles.imageSelected}>Resim seçildi ✓</Text>
          </View>
        )}

        <TouchableOpacity style={styles.imageBtn} onPress={pickImage}>
          <Ionicons name="add" size={20} color={COLORS.white} />
          <Text style={styles.imageBtnText}>Resim Ekle</Text>
        </TouchableOpacity>
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
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    gap: 12,
  },
  headerTitle: { flex: 1, fontSize: 18, fontWeight: '700', color: COLORS.text },
  sendBtn: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  sendBtnText: { color: COLORS.white, fontWeight: '600', fontSize: 14 },
  scroll: { flex: 1, padding: 16 },
  label: { fontSize: 14, color: COLORS.textMuted, marginBottom: 16 },
  recipient: { fontWeight: '700', color: COLORS.text },
  titleInput: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: COLORS.text,
    marginBottom: 14,
  },
  messageInput: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: COLORS.text,
    height: 160,
    marginBottom: 20,
  },
  imagePreview: {
    alignItems: 'center',
    marginBottom: 14,
    padding: 16,
    borderRadius: 12,
    backgroundColor: COLORS.primaryLighter,
  },
  imageSelected: { color: COLORS.primary, fontWeight: '600', marginTop: 8 },
  imageBtn: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 13,
    borderRadius: 12,
    gap: 8,
  },
  imageBtnText: { color: COLORS.white, fontSize: 15, fontWeight: '700' },
});
