export interface Notification {
  id: string;
  message: string;
  date: string;
  time: string;
  type: 'reminder' | 'info' | 'achievement';
  image?: string;
}

export const NOTIFICATIONS: Notification[] = [
  {
    id: 'n1',
    message: 'Uyku hijyen günlüğünüzü tutmayı unutmayın',
    date: '2024-06-09',
    time: '10:56',
    type: 'reminder',
  },
  {
    id: 'n2',
    message: 'Çocuk sahibi olma ile ilgili olumlu düşüncelerimi her geçen gün artırıyorum',
    date: '2024-05-20',
    time: '18:15',
    type: 'info',
    image: 'https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?w=200&q=80',
  },
  {
    id: 'n3',
    message: 'Dengeli ve düzenli beslenmenin gebelik şansımı artırdığının farkındayım',
    date: '2024-05-20',
    time: '12:00',
    type: 'reminder',
  },
  {
    id: 'n4',
    message: 'Bugün doğurganlığınızı artırmak için hangi besinleri tüketeceksiniz?',
    date: '2024-05-20',
    time: '11:45',
    type: 'info',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&q=80',
  },
  {
    id: 'n5',
    message: 'Anket kısmındaki ölçeklerimizi henüz çözmediniz mi* bekliyoruzzzzzz',
    date: '2024-05-20',
    time: '11:43',
    type: 'reminder',
  },
  {
    id: 'n6',
    message: 'Çocuk sahibi olma ile ilgili olumlu düşüncelerimi her geçen gün artırıyorum',
    date: '2024-05-06',
    time: '09:00',
    type: 'info',
  },
  {
    id: 'n7',
    message: 'Çocuk sahibi olma ile ilgili olumlu düşüncelerimi her geçen gün artırıyorum',
    date: '2024-05-06',
    time: '09:00',
    type: 'achievement',
  },
];
