export interface Course {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  videos: Video[];
}

export interface Video {
  id: string;
  courseId: string;
  title: string;
  duration: string;
  url: string;
}

export const COURSES: Course[] = [
  {
    id: 'course-1',
    title: 'Ders-1',
    subtitle: 'Egzersiz',
    thumbnail: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&q=80',
    videos: [
      { id: 'c1v1', courseId: 'course-1', title: 'Ders-1', duration: '09:51', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: 'c1v2', courseId: 'course-1', title: 'Ders-2', duration: '09:37', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: 'c1v3', courseId: 'course-1', title: 'Ders-3', duration: '10:22', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: 'c1v4', courseId: 'course-1', title: 'Ders-4', duration: '08:15', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: 'c1v5', courseId: 'course-1', title: 'Ders-5', duration: '11:30', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    ],
  },
  {
    id: 'course-2',
    title: 'Ders-2',
    subtitle: 'Doğurganlık Masajı',
    thumbnail: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80',
    videos: [
      { id: 'c2v1', courseId: 'course-2', title: 'Ders-1', duration: '02:36', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: 'c2v2', courseId: 'course-2', title: 'Ders-2', duration: '04:39', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: 'c2v3', courseId: 'course-2', title: 'Ders-3', duration: '04:05', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: 'c2v4', courseId: 'course-2', title: 'Ders-4', duration: '03:48', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    ],
  },
];
