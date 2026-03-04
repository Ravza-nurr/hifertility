# HiFertility - Doğurganlık Rehberi Mobil Uygulaması

> Kadınların doğurganlık yolculuklarında rehberlik eden kapsamlı mobil uygulama. Video dersler, kısa bilgiler, ev ödevleri ve topluluk desteği sunar.

---

## � Uygulama Tanıtım Videosu

https://youtube.com/shorts/mS5crGFpixA

---

## 🚀 Yerelde Nasıl Çalıştırırım?

### Gereksinimler

- [Node.js 18+](https://nodejs.org/) yüklü olmalı
- Telefona **Expo Go** uygulaması yüklenmiş olmalı ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS](https://apps.apple.com/app/expo-go/id982107779))
- Bilgisayar ve telefon **aynı Wi-Fi ağında** olmalı

### Kurulum Adımları

```bash
# 1. Repoyu klonlayın
git clone https://github.com/KULLANICI_ADI/REPO_ADI.git

# 2. Proje klasörüne girin
cd proje2

# 3. Bağımlılıkları yükleyin
npm install --legacy-peer-deps

# 4. Uygulamayı başlatın
npm start
```

5. Terminalde görünen **QR kodu** Expo Go uygulamasından tarayın → Uygulama açılır ✅

### Sorun giderme

```bash
# Eğer hata alırsanız cache temizleyerek deneyin:
npm run dev
```

---

## 📦 APK Dosyası

| Dosya | Platform | İndirme |
|-------|----------|---------|
| `hifertility.apk` | Android | [`/apk/hifertility.apk`](./apk/hifertility.apk) |

> APK'yı doğrudan Android telefonunuza kurabilirsiniz. "Bilinmeyen kaynaklardan yüklemeye" izin vermeniz gerekebilir.

---

## 📱 Uygulama Özellikleri

| Ekran | Açıklama |
|-------|----------|
| Ana Sayfa | Banner + hızlı erişim kartları + içerik listesi |
| Kurslar | Ders-1 (Egzersiz), Ders-2 (Doğurganlık Masajı) |
| Video İzleme | Video oynatıcı + Tamamlandı butonu (kaydedilir) |
| Kısa Bilgiler | Beğen/Yorum destekli bilgi kartları |
| Ev Ödevi | Ödev içeriği + form ile gönderme + resim ekleme |
| Bildirimler | Tarih/saat bilgili hatırlatma listesi |
| Forum | Konu listesi + Yeni Konu oluşturma |
| Anket | 5 sorulu 1–5 yıldız değerlendirme formu |
| Drawer Menü | Esra ARBAĞ profili + 12 menü öğesi |

---

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Sürüm | Kullanım |
|-----------|-------|----------|
| Expo | SDK 54 | Framework |
| React Native | 0.81.5 | Mobil altyapı |
| expo-router | ~6.0 | Dosya tabanlı navigasyon |
| Redux Toolkit | latest | State yönetimi |
| AsyncStorage | latest | Video ilerlemesi kaydetme |
| NativeWind | 4.1.23 | Tailwind CSS stilleme |
| expo-video | ~3.0 | Video oynatıcı |
| expo-image-picker | latest | Resim ekleme |

---

## 📁 Proje Yapısı

```
proje2/
├── app/                    # Tüm ekranlar (expo-router)
│   ├── (tabs)/             # Tab bar ekranları
│   │   ├── home.tsx        # Ana Sayfa
│   │   ├── courses.tsx     # Kurslar
│   │   ├── notifications.tsx # Bildirimler
│   │   └── profile.tsx     # Profil
│   ├── course/[id].tsx     # Ders detayı
│   ├── video/[id].tsx      # Video oynatıcı
│   ├── homework.tsx        # Ev Ödevi
│   ├── short-info.tsx      # Kısa Bilgiler
│   ├── forum.tsx           # Forum
│   ├── survey.tsx          # Anket
│   └── ...
├── src/
│   ├── components/         # ContentCard, CourseCard, vb.
│   ├── constants/colors.ts # Mor renk paleti
│   ├── data/               # Mock veri (kurslar, makaleler)
│   └── store/              # Redux Toolkit store
└── apk/
    └── hifertility.apk     # Android APK
```
