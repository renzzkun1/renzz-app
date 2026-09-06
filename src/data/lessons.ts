import { Lesson } from '@/types';

export const LESSONS_DATA: Lesson[] = [
  // LEVEL 0 - Computer Basics
  {
    id: 'comp-01',
    level: 0,
    category: 'Basics',
    title: 'Apa itu Komputer & Software?',
    description: 'Memahami fondasi hardware, software, dan bagaimana komputer berpikir.',
    content: 'Komputer adalah mesin elektronik yang memproses data berdasarkan instruksi. Software (perangkat lunak) adalah kumpulan instruksi tersebut.',
    xpReward: 20
  },
  {
    id: 'comp-02',
    level: 0,
    category: 'Basics',
    title: 'Apa itu Coding & Programming Language?',
    description: 'Mengenal bahasa pemandu antara manusia dan mesin.',
    content: 'Coding adalah tindakan menulis instruksi untuk komputer. Bahasa pemrograman adalah sintaks yang menjembatani logika manusia dengan bahasa mesin.',
    xpReward: 20
  },
  {
    id: 'comp-03',
    level: 0,
    category: 'Basics',
    title: 'Compiler vs Interpreter',
    description: 'Dua cara komputer membaca dan menerjemahkan kode Anda.',
    content: 'Compiler menerjemahkan seluruh kode sekaligus sebelum dijalankan (misal: C++). Interpreter membaca dan mengeksekusi kode baris demi baris (misal: Python, JavaScript).',
    xpReward: 20
  },
  {
    id: 'comp-04',
    level: 0,
    category: 'Basics',
    title: 'Mengenal Terminal & Command Line',
    description: 'Navigasi sistem operasi menggunakan perintah teks.',
    content: 'Terminal memungkinkan Anda mengontrol komputer melalui perintah teks cepat tanpa UI grafis.',
    xpReward: 20
  },

  // LEVEL 1 - HTML
  {
    id: 'html-01',
    level: 1,
    category: 'HTML',
    title: 'Struktur Dasar HTML',
    description: 'Menyusun tulang punggung halaman web modern.',
    content: 'HTML (HyperText Markup Language) menggunakan tag seperti <html>, <head>, dan <body> untuk membangun struktur web.',
    xpReward: 30
  },
  {
    id: 'html-02',
    level: 1,
    category: 'HTML',
    title: 'Heading, Paragraph & Text Formatting',
    description: 'Mengatur hierarki dan keterbacaan teks web.',
    content: 'Gunakan <h1> sampai <h6> untuk judul, dan <p> untuk paragraf teks.',
    xpReward: 30
  },
  {
    id: 'html-03',
    level: 1,
    category: 'HTML',
    title: 'Link (Anchor) & Image',
    description: 'Menghubungkan halaman dan menyisipkan media visual.',
    content: 'Tag <a href="..."> digunakan untuk navigasi link, sedangkan <img src="..." alt="..."> untuk menampilkan gambar.',
    xpReward: 30
  },
  {
    id: 'html-04',
    level: 1,
    category: 'HTML',
    title: 'Form & Input Element',
    description: 'Mengumpulkan interaksi dan input dari pengguna.',
    content: 'Form menggunakan <form>, <input type="text">, <button>, dan <textarea> untuk menerima interaksi pengguna.',
    xpReward: 35
  },

  // LEVEL 2 - CSS
  {
    id: 'css-01',
    level: 2,
    category: 'CSS',
    title: 'CSS Selector & Property',
    description: 'Mewarnai dan merias elemen-elemen HTML.',
    content: 'CSS mengontrol tampilan visual elemen. Gunakan class (.classname) atau ID (#idname) untuk menentukan gaya.',
    xpReward: 30
  },
  {
    id: 'css-02',
    level: 2,
    category: 'CSS',
    title: 'Box Model: Margin, Padding & Border',
    description: 'Memahami tata letak dan jarak antar elemen.',
    content: 'Box Model terdiri dari Content, Padding (jarak dalam), Border (garis tepi), dan Margin (jarak luar).',
    xpReward: 35
  },
  {
    id: 'css-03',
    level: 2,
    category: 'CSS',
    title: 'Flexbox Layout',
    description: 'Membuat tata letak fleksibel dan responsif dengan mudah.',
    content: 'Properti `display: flex` memudahkan perataan elemen secara horizontal maupun vertikal.',
    xpReward: 40
  },
  {
    id: 'css-04',
    level: 2,
    category: 'CSS',
    title: 'Responsive Design & Media Queries',
    description: 'Membuat tampilan web menyesuaikan HP, Tablet, dan PC.',
    content: 'Media Queries `@media (max-width: 768px)` memungkinkan style berubah tergantung ukuran layar.',
    xpReward: 40
  },

  // LEVEL 3 - JavaScript
  {
    id: 'js-01',
    level: 3,
    category: 'JS',
    title: 'Variable: let, const & var',
    description: 'Menyimpan data interaktif di dalam memori program.',
    content: '`const` untuk nilai tetap, `let` untuk nilai yang bisa berubah. Hindari penggunaan `var` pada JavaScript modern.',
    xpReward: 40
  },
  {
    id: 'js-02',
    level: 3,
    category: 'JS',
    title: 'Function & Arrow Function',
    description: 'Menulis blok kode yang reusable dan modular.',
    content: 'Function membungkus logika yang dapat dipanggil kembali. Arrow function `() => {}` memberikan sintaks yang lebih ringkas.',
    xpReward: 45
  },
  {
    id: 'js-03',
    level: 3,
    category: 'JS',
    title: 'DOM Manipulation',
    description: 'Mengendalikan isi HTML secara langsung dari script JS.',
    content: 'Gunakan `document.querySelector()` dan `element.addEventListener()` untuk merespons klik atau input pengguna.',
    xpReward: 50
  },
  {
    id: 'js-04',
    level: 3,
    category: 'JS',
    title: 'Async, Fetch API & JSON',
    description: 'Mengambil data dari internet tanpa me-reload halaman.',
    content: 'Async/Await dan `fetch()` digunakan untuk melakukan request data ke REST API server.',
    xpReward: 50
  },

  // LEVEL 4 - Python
  {
    id: 'py-01',
    level: 4,
    category: 'Python',
    title: 'Sintaks Dasar & Indentasi Python',
    description: 'Bahasa terpopuler untuk Data, AI, dan Automation.',
    content: 'Python menggunakan spasi/indentasi rapi alih-alih kurung kurawal `{}` untuk menentukan blok kode.',
    xpReward: 40
  },
  {
    id: 'py-02',
    level: 4,
    category: 'Python',
    title: 'List & Dictionary Python',
    description: 'Struktur data utama untuk menyimpan koleksi informasi.',
    content: 'List `[1, 2, 3]` menyimpan urutan data, sedangkan Dictionary `{"nama": "Renzz"}` menyimpan pasangan Key-Value.',
    xpReward: 45
  },

  // LEVEL 5 - Advanced
  {
    id: 'adv-01',
    level: 5,
    category: 'Advanced',
    title: 'Git & Version Control',
    description: 'Melacak perubahan kode dan kolaborasi tim.',
    content: 'Git mencatat setiap commit kode Anda sehingga Anda bisa kembali ke versi sebelumnya kapan saja.',
    xpReward: 60
  },
  {
    id: 'adv-02',
    level: 5,
    category: 'Advanced',
    title: 'Deployment dengan Vercel',
    description: 'Mempublikasikan web app Anda ke seluruh dunia secara instan.',
    content: 'Vercel mengintegrasikan repository GitHub untuk melakukan automatic build & deployment setiap ada push kode.',
    xpReward: 60
  }
];
