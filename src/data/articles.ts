export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  image?: string;
  likes: number;
  comments: number;
  views: number;
}

export const SHORT_INFO_ARTICLES: Article[] = [
  {
    id: 'si-1',
    title: 'Uyku ve Doğurganlık Arasındaki İlişki',
    summary: 'Sağlıklı bir yaşamın gereksinimlerinden biri olan uyku olgusu ruhu, zihni ve bedeni yeniden şarj etmek gerektiğinde kişinin stres ve sorumluluklarından...',
    content: `Sağlıklı bir yaşamın gereksinimlerinden biri olan uyku olgusu ruhu, zihni ve bedeni yeniden şarj etmek gerektiğinde kişinin stres ve sorumluluklarından uzaklaşmasını sağlar.

Uyku kalitesi ve süresi, üreme sağlığı üzerinde doğrudan etkiye sahiptir. Yetersiz uyku, hormon dengesini bozarak ovülasyon düzensizliklerine yol açabilir.

Melatonin, hem uyku düзenlenmesinde hem de üreme sisteminin korunmasında kritik rol oynar. Gece karanlığında üretilen bu hormon, yumurtalık sağlığını destekler.`,
    author: 'Hifertility',
    date: '2024-06-20 11:06:13',
    image: 'https://images.unsplash.com/photo-1520206183501-b80df61043c2?w=600&q=80',
    likes: 0,
    comments: 0,
    views: 5,
  },
  {
    id: 'si-2',
    title: 'Fiziksel Aktivite Doğurganlığı Nasıl Etkiler?',
    summary: 'Fiziksel aktivite günlük yaşam içerisinde kas ve eklemlerimizi kullanarak enerji tüketimi ile gerçekleşen, kalp ve solunum hızını arttıran aktiviteler...',
    content: `Fiziksel aktivite günlük yaşam içerisinde kas ve eklemlerimizi kullanarak enerji tüketimi ile gerçekleşen, kalp ve solunum hızını arttıran ve farklı şiddetlerde yorgunlukla sonuçlanan aktiviteler olarak tanımlanabilir.

Yürümek, koşmak, sıçramak, yüzmek, bisiklete binmek, çömelmek – kalkmak, kol ve bacak hareketleri, baş ve gövde hareketleri gibi temel vücut hareketlerinin tümünü ya da bir kısmını içeren çeşitli spor dalları, dans, egzersiz, oyun ve gün içersindeki aktiviteler fiziksel aktivite olarak kabul edilebilirler.

Düzenli fiziksel aktivite; kan dolaşımını artırır, stresi azaltır ve ideal kiloya ulaşmayı destekler. Bu faktörlerin tümü doğurganlık üzerinde olumlu etki yaratır.`,
    author: 'Hifertility',
    date: '2024-05-15 09:30:00',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    likes: 2,
    comments: 1,
    views: 12,
  },
  {
    id: 'si-3',
    title: 'Doğurganlığı Arttıran En İyi 5 Atıştırmalık',
    summary: '1. MEYVE - Bir porsiyon meyve harika ve hafif bir doğurganlık atıştırmalığı olabilir. Meyve tüketimi size canlı doğal şekerler ve besinler sağlar...',
    content: `**1. MEYVE**
Bir porsiyon meyve harika ve hafif bir doğurganlık atıştırmalığı olabilir. Meyve tüketimi size canlı doğal şekerler ve besinler sağlar.

**2. KURUYEMIŞLER**
Ceviz, badem ve fındık gibi kuruyemişler omega-3 yağ asitleri ve E vitamini açısından zengindir.

**3. YOĞURT**
Probiyotik açısından zengin yoğurt, bağırsak sağlığını destekler ve hormon dengesine katkı sağlar.

**4. KOYU YEŞİL YAPRAKLI SEBZELER**
Ispanak, brokoli ve lahana folik asit deposudur. Folik asit üreme sağlığı için kritiktir.

**5. AVOKADO**
Sağlıklı yağlar ve E vitamini içeren avokado, yumurta kalitesini artırabilir.`,
    author: 'Hifertility',
    date: '2024-04-10 14:20:00',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
    likes: 0,
    comments: 0,
    views: 1,
  },
  {
    id: 'si-4',
    title: 'Neden Yaşam Tarzımızı İyileştirmeliyiz?',
    summary: 'Fetal programlanma, anne karnında olumsuz çevresel şartlara maruz kalan fetüsün anatomik, fizyolojik ve metabolik yapısını kalıcı olarak değiştirerek...',
    content: `Fetal programlanma, anne karnında olumsuz çevresel şartlara maruz kalan fetüsün anatomik, fizyolojik ve metabolik yapısını kalıcı olarak değiştirerek uyum sağlamasıdır. Başka bir ifadeyle prenatal dönemde gelişimin duyarlı olduğu her zaman diliminde intrauterin (anne karnındaki) uyarıların erişkinlerde yaşam boyu sürecek etkilere yol açmasıdır.

İnsanlar üzerinde yapılan araştırmalarda intrauterin ortamdaki değişikliklerin gen ekspresyonlarını değiştirdiği ve hastalıklarla ilgili fizyolojik ve morfolojik fenotiplere yol açtığı ve epigenetik olarak bu değişimlerin daha sonraki nesillere aktarıldığı belirtilmiştir.

Dolayısı ile daha sağlıklı nesiller için yaşam tarzı alışkanlıklarımızı düzenlemeliyiz.`,
    author: 'Hifertility',
    date: '2024-03-22 10:00:00',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
    likes: 3,
    comments: 0,
    views: 18,
  },
];

export const HOMEWORK: Article = {
  id: 'hw-1',
  title: 'Doğurganlığı arttırıcı beslenme alışveriş listenizi hazırlayın',
  summary: 'Aylık alışveriş listenizi bu sefer doğurganlığı arttırıcı besinleri göz önünde bulundurarak hazırlayın ve sonrasında beraber gözden geçirelim',
  content: 'Aylık alışveriş listenizi bu sefer doğurganlığı arttırıcı besinleri göz önünde bulundurarak hazırlayın ve sonrasında beraber gözden geçirelim',
  author: 'Hifertility',
  date: '2024-04-16 13:51:39',
  image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80',
  likes: 4,
  comments: 0,
  views: 28,
};
