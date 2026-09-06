import { Article } from '@/types';

export const ARTICLES_DATA: Article[] = [
  {
    id: 'art-01',
    title: 'Bagaimana Algoritma Recomendation Social Media Bekerja?',
    category: 'social_media',
    readTime: '4 min',
    summary: 'Membedah rahasia di balik beranda TikTok, Instagram Reels, dan YouTube Shorts.',
    content: 'Algoritma merekomendasikan konten berdasarkan sinyal interaksi pengguna: durasi tonton, like, comment, share, dan jenis konten yang sering Anda akses.'
  },
  {
    id: 'art-02',
    title: 'FPS, Ping, & Latency: Panduan Memahami Performa Gaming',
    category: 'gaming',
    readTime: '5 min',
    summary: 'Mengapa game Anda patah-patah atau delay saat dimainkan?',
    content: 'FPS dipengaruhi oleh kekuatan VGA/GPU & CPU Anda. Sementara Ping dan Latency dipengaruhi oleh kestabilan koneksi jaringan internet ke server game.'
  },
  {
    id: 'art-03',
    title: 'Perjalanan Sinyal Web: Apa yang Terjadi Saat Anda Ketik URL?',
    category: 'internet',
    readTime: '6 min',
    summary: 'Memahami siklus DNS lookup, TCP Handshake, hingga Server Response.',
    content: 'Browser meminta alamat IP ke DNS Server, melakukan koneksi aman (HTTPS), dan menerima data paket HTML, CSS, serta JavaScript dari web server.'
  },
  {
    id: 'art-04',
    title: 'Apa itu AI Prompt Engineering & Mengapa Penting?',
    category: 'technology',
    readTime: '4 min',
    summary: 'Seni berkomunikasi dengan kecerdasan buatan untuk hasil maksimal.',
    content: 'Prompt Engineering adalah teknik merumuskan pertanyaan/instruksi secara spesifik dan terstruktur agar model AI memberikan jawaban yang presisi.'
  }
];
